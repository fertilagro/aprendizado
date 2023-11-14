import {
  Component, DoCheck, ElementRef, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf, ViewChild
} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { HttpUtilService } from '../../services/http-util.service';
import { Utils } from '../../Util/utils-components';
import { Fkfield } from './fkfield.model';
import { DisableControlModule } from 'src/app/shared/directive/disable-control/disable-control.module';

const FKFIELD_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => FkfieldComponent),
  multi: true
};
/** Enumerador que define e padroniza as origens */
export enum TipoDescricao {
  PADRAO,
  PERSONALIZADO
}
/**
 * Componente de relacionamento.
 *
 * Esse componente foi criado para facilitar o desenvolvimento de telas com relacionamento de um para um (Ex.: Cidade tem um Pais).
 *
 * @example
 *   <app-fkfield rotulo="Cidade"
 *                [disableControl]="disableCampos"
 *                tipo="cidades"
 *                [parametros]="['nome']"
 *                formControlName="cidade"></app-fkfield>
 */
@Component({
  selector: 'app-fkfield',
  templateUrl: './fkfield.component.html',
  styleUrls: ['./fkfield.component.scss'],
  providers: [FKFIELD_FIELD_VALUE_ACESSOR]
})
export class FkfieldComponent implements OnInit, ControlValueAccessor, DoCheck {

  /** Mapeamento do webservice que será consumido para buscar os dados que serão relacionados.
   *
   * Ex.: No projeto back-end temos uma classe <NOME_DA_CLASSE>WS que tem uma anotação
   *
   * @RequestMapping("<MAPEAMENTO_DO_WEBSERVICE>") então o tipo deve ser 'MAPEAMENTO_DO_WEBSERVICE'
   */

  @Input() tipo: string;
  /** Define qual tipo de descrição vai mostrar no componente ('PADRAO' = 'label' ou 'PERSONALIZADO' = 'labelPersonalizado'). */
  @Input() tipoDescricao = TipoDescricao.PADRAO;
  /** Título que será apresentado ao lado ou acima do campo. */
  @Input() rotulo: string;
  /** Responsável pela habilitação / desabilitação do campo. */
  @Input() ocultarPesquisa = false;
  /** Define se a chave do registro é do tipo texto ou literal. */
  @Input() chaveLiteral = false;
  /** Responsável desabilitar o campo.
   *
   *  Default: false
   */
  @Input() desabilitar: boolean;
  @Input() focus: boolean;
  /** Quantidade de registros retornados por consulta. */
  @Input() limit: number;
  /** Lista com o nome de cada atributo da entidade em que deseja buscar os dados.
   *
   * Ex.: Para a entidade CidadeVO, se deseja buscar por nome e UF, então o valor passado para essa propriedade deve ser ['nome','estado']
   */
  @Input() parametros: string[];
  /** Objeto com valores para condicionar a busca dos dados, o método de condição adicional do back-end deve ser sobrescrito
   * para adicionar os valores do objeto no filtro dos dados
   */
  @Input() parametroCondicaoAdicional: any;
  /** Largura do Modal da tela de pesquisa */
  @Input() larguraTelaPesquisa: string;
  /** Referencia do elemento pai.
   *
   *  Ao utilizar criar a referência do pai
   *  <app-fkfield #marca ></app-fkfield>
   *  E recuperar a referência com a anotação abaixo
   *  @ViewChild('marca', {static: true}) marca: ElementRef;
   *  E passar o elemento recuperado para o fkfield dependente
   *  <app-fkfield [pai]="marca" ></app-fkfield>
   */
  @Input() pai: FkfieldComponent;
  /** Flag para definir seu deseja filtrar o registro pelo registro pai, por padrão o valor é true */
  @Input() filtroPai = true;
/** Flag para definir o nome do pai
   e não buscar o nome definido formControlName
   e sim informado  */
  @Input()  nomePai: string;

  @ViewChild('input', { static: true }) input: ElementRef;
  private ultimoValorPai: any;
  /** Flag para definir se vem do a2o filtro, por padrão o valor é false */
  @Input() a2ofiltro = false;
  /** Evento disparado ao selecionar um item. */
  @Output() aoSelecionar = new EventEmitter();
  @Output() aoSairDoCampo = new EventEmitter();

  /** Tipo de seleção da tabela, por padrão sera do tipo 'simples' podendo assumir o tipo 'multipla' */
  @Input() tipoSelecaoPesquisa: "multipla" | "simples";

  /** Formulário reativo que está responsável por controlar a entrada e saída de dados dos campos da tela. */
  formGroup: FormGroup;
  /** Control referente ao campo no formulário reativo. */
  // @ContentChild(FormControlName, { static: true }) public controlName: FormControlName;
  /** @ignore */
  controlador = new FormControl();
  /** @ignore */
  filteredOptions: Observable<Fkfield[]>;
  /** Valor apresentado no campo */
  private valorInterno: any;
  // public url: string;

  @Input() formControlName: string;
  private control: AbstractControl;
  selecionados: any[];
  labelSelecionados: string;

  tipoFkfield: 'Pessoa' | 'Veículo';

  @Input() reconsultarSelecionado: boolean = false;

  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
    protected httpServ: HttpUtilService,
    protected mensagem: MessageService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    if (!this.limit) {
      this.limit = 10;
    }

    this.controlador.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map(value => typeof value === 'string' ? this.carregarDados(value) : this.filteredOptions)
    ).subscribe(res => this.filteredOptions = res);

    if (this.controlContainer && this.formControlName) {
      this.formGroup = this.controlContainer.control as FormGroup;
      this.control = this.controlContainer.control.get(this.formControlName);
    }
  }

  /** Implementação das regras para marcar os campos requeridos como obrigatórios */
  ngDoCheck(): void {
    if (this.control) {
      if (this.controlador.validator !== this.control.validator) {
        this.controlador.setValidators(this.control.validator);
        this.controlador.updateValueAndValidity();
      }
      if (this.control.touched === true && this.control.status === 'INVALID') {
        this.controlador.markAsTouched();
      } else {
        this.controlador.markAsUntouched();
      }
    }
  }

  get value() {
    return this.valorInterno;
  }

  set value(v: any) {
    if ((!v || typeof (v) === 'object') && v !== this.valorInterno) {
      this.setValue(v);
    }
  }

  setValue(v: any) {
    this.limparLabelSelecionados(v);
    this.valorInterno = v;
    this.controlador.patchValue(v);
    v && v.value ? this.onChangeCb(v.value) : this.onChangeCb(v);
    this.aoSelecionar.emit(v);
  }

  private limparLabelSelecionados(valor: any) {
    if ((!valor || !(valor instanceof Array)) &&
      this.labelSelecionados !== null) {
      this.selecionados = null;
      this.labelSelecionados = null;
    }
  }

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  writeValue(value: any): void {
    // console.log(value);
    if (((this.chaveLiteral && typeof value !== 'object' && value && value.length > 0)
      || (!isNaN(Number(value)) && Number(value) !== 0)) && this.controlador.value !== value) {
      this.value = undefined;
      this.buscarPorChave(this.chaveLiteral ? value : Number(value));
    } else if (value && typeof value === 'object') {
      this.value = new Fkfield(value);
    } else {
      // this.limpar();
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.desabilitar = isDisabled;
  }

  /** Após iniciar o componente configura o gatilho para disparar a busca por chave ou limpar os campos */
  // ngAfterViewInit() {

  //   if (this.controlName && this.controlName.control) {
  //     this.formGroup = this.controlName.control.parent as FormGroup;
  //   }
  // }

  aoSairComTab(event, isOpen) {
    this.aoSairDoCampo.emit(true);
    const time = isOpen ? 1000 : 0;
    setTimeout(() => {
      if (((this.chaveLiteral && this.controlador.value && this.controlador.value.length > 0)
        || (!isNaN(Number(this.controlador.value)) && Number(this.controlador.value) !== 0))) {
        this.buscarPorChave(this.chaveLiteral ? this.controlador.value : Number(this.controlador.value));
      } else {
        if (this.value === undefined || this.value === null) {
          this.limpar();
        } else if (this.value && (this.controlador.value || this.controlador.value === '') && this.value !== this.controlador.value) {
          this.limpar();
        }
      }
    }, time);
  }

  /** limpa o item selecionado e o valor do campo */
  limpar() {
    this.value = undefined;
    this.filteredOptions = undefined;
    this.controlador.reset();
  }

  /** Caso o valor do campo sejá um número o componente realiza a busca por chave */
  buscarPorChave(id: any) {
    this.value = undefined;
    if (this.pai && this.pai.value && this.filtroPai === true) {
      this.ultimoValorPai = this.pai.value.value.id;
    }
    this.httpServ.httpPost(this.tipo + '/buscarPorChaveFkfield',
      { id, parametroCondicaoAdicional: this.parametroCondicaoAdicional, pai: this.ultimoValorPai }).toPromise().
      then(retorno => {
        this.value = retorno;
      }).catch(error => {
        if (error.error == null) {
          console.log(error);
        } else {
          Utils.tratarErro(error, this.mensagem);
          if (error.status === 400) {
            this.limpar();
          }
        }
      });
  }

  /** Realiza a busca dos dados no webservice mapeado no parâmetro {tipo},
   * com base no que foi digitado no campo e os valores passados para o parâmetro {parametros},
   * a busca sera limitada pelo parâmetro {limit}.
   */
  carregarDados(value: string) {
    if (value === '') {
      return this.value = undefined;
    } else {
      const params: any = {};
      const parametroCondicao: any = {};
      this.parametros.forEach(element => {
        parametroCondicao[element] = value;
      });
      params.limit = this.limit;
      params.parametroCondicao = parametroCondicao;
      params.parametroCondicaoAdicional = this.parametroCondicaoAdicional;
      if (this.pai && this.pai.value && this.filtroPai === true) {
        this.ultimoValorPai = this.pai.value.value.id;
        params.pai = this.ultimoValorPai;
      }
      return this.httpServ.httpPost(this.tipo + '/filtrarFkfield', params)
        .pipe(
          map(response => {
            if (!response || response.length === 0) {
              this.mensagem.add({
                severity: 'warn', summary: 'Atenção!',
                detail: 'Dados não encontrados para o filtro informado.'
              });
            }
            return response;
          })
        );
    }
  }

  /** Evento disparado ao selecionar o registro */
  selecionando(event) {
    // console.log(event);
    if (this.reconsultarSelecionado && event.option.value && event.option.value.value && event.option.value.value.id) {
      let id = event.option.value.value.id.id ? event.option.value.value.id.id : event.option.value.value.id;
      this.buscarPorChave(id);
    } else {
      this.value = event.option.value;
      this.validarCadastroPendente(this.value);
    }
  }

  /** Responsável por tratar os dados exibidos no campo */
  displayFn(fkfield?: Fkfield): string | undefined {
    const eDescricaoPernalizado = this.tipoDescricao === TipoDescricao.PERSONALIZADO;
    const eFiltroValoresSelecionados = this.a2ofiltro && this.selecionados?.length > 1;
    let label = eDescricaoPernalizado ? fkfield?.labelPersonalizado : fkfield?.label;
    return this.retornaVazio(eFiltroValoresSelecionados ? this.labelSelecionados : label);
  }

  /** Esse método é disparado sempre que o input receber o foco
   * Esta implementado nele, uma regra para fkfield dependente para obrigar o preenchimento do pai antes da dependencia,
   * e também a uma regra para limpar o campo caso mude o valor do pai.
   */
  aoReceberFoco() {
    this.filteredOptions = undefined;
    setTimeout(() => {
      if (this.pai) {
        this.pai.aoSelecionar.subscribe(() => {
          if (this.ultimoValorPai) {
            if (!this.pai.value) {
              this.limpar();
            } else if (this.pai.value.value && this.pai.value.value.id !== this.ultimoValorPai) {
              this.limpar();
            }
          }
        });
        if (!this.pai.value) {
          this.mensagem.clear();
          this.mensagem.add({
            severity: 'error', summary: 'Erro!',
            detail: 'Este campo depende do preenchimento do campo anterior.'
          });
          this.pai.input.nativeElement.focus();
          this.limpar();
        }
      }
    }, 500);
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

  async abrirPesquisa() {
    const tela = this.getComponentePesquisaPorTipo(this.tipo);
    if (tela) {
      const pesquisando = true;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      if (this.larguraTelaPesquisa) {
        dialogConfig.width = this.larguraTelaPesquisa;
      }
      let filtroPai;
      if (this.pai && this.pai.value && this.filtroPai === true) {
        this.ultimoValorPai = this.pai.value.value.id;
        filtroPai = {
          nome: this.nomePai ?? this.getControlName(this.pai.control),
          valor: this.ultimoValorPai };
        console.log(filtroPai);
      }
      const tipoSelecao = this.tipoSelecaoPesquisa ?? 'multipla';
      dialogConfig.data = { value: this.value, parametroCondicaoAdicional: this.parametroCondicaoAdicional, filtroPai, pesquisando, tipoSelecao };
      const dialogRef = this.dialog.open(tela, dialogConfig);

      await dialogRef.afterClosed().subscribe(async (result) => {
        if (result) {
          this.selecionados = result.selecionados;
          if (this.a2ofiltro && this.selecionados && this.selecionados.length > 1) {
            this.labelSelecionados = null;
            await this.selecionados.forEach(item => {
              if (this.labelSelecionados) {
                this.labelSelecionados += '; ' + item.labelFkfield;
              } else {
                this.labelSelecionados = item.labelFkfield;
              }
            });
            this.value = result.selecionados.map(item => new Fkfield(item));
          } else {
            if (this.reconsultarSelecionado && result.selecionado && result.selecionado.id) {
              let id = result.selecionado.id.id ? result.selecionado.id.id : result.selecionado.id;
              this.buscarPorChave(id);
            } else {
              const selecionado = result.selecionado;
              this.value = new Fkfield(selecionado);
              this.validarCadastroPendente(this.value);
            }
          }
        }
      });
    }
  }

  getDescricao({ label, labelPersonalizado }: Fkfield) {
    const personalizado = this.tipoDescricao === TipoDescricao.PERSONALIZADO;
    const descricao = personalizado ? labelPersonalizado : label;
    return this.retornaVazio(descricao);
  }

  private retornaVazio(valor: any): any {
    return valor ?? '';
  }

  getComponentePesquisaPorTipo(tipo) {
    let componente;
    if (tipo === 'pessoas') {
    //  componente = PessoaPesquisaComponent;
    } else if (tipo === 'motoristas') {
    //  componente = MotoristaPesquisaComponent;
    } else if (tipo === 'mascaraContabeis') {
   //   componente = MascaraCtbPesquisaComponent;
    }

    return componente;
  }

  protected validarCadastroPendente(fkField: Fkfield): boolean {
    if (fkField?.value?.status === 'Pendente' && this.parametroCondicaoAdicional?.validarPendente) {
      const detail = `O cadastro do ${this.tipoFkfield} nº: ${fkField.value.id.id} está com o status pendente!`;
      this.mensagem.add({severity: 'warn', summary: 'Atenção!', detail});
      this.limpar();
      return true;
    }
    return false;
  }
}
