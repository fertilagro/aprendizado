import {
  Component,
  DoCheck,
  EventEmitter,
  Host,
  Injector,
  Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
  forwardRef
} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { HttpUtilService } from '../../services/http-util.service';
import { Fkfield } from './fkfield.model';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FertilAgroFkFieldComponent),
  multi: true
};

@Component({
  selector: 'app-fertilagro-FkField',
  templateUrl: './fertilagro-FkField.component.html',
  styleUrls: ['./fertilagro-FkField.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class FertilAgroFkFieldComponent implements OnInit, ControlValueAccessor, DoCheck {

  @Input() tipo: String;
  @Input() titulo: string;
  @Input() desabilitar = false;
  @Input() focus: boolean;
  @Input() formControlName: string;
  @Input() pai: FertilAgroFkFieldComponent;
  @Input() onFocus = new EventEmitter();

  @Output() aoSairComTab = new EventEmitter();
  @Output() aoSelecionar = new EventEmitter();

  public controlador = new FormControl();
  private control: AbstractControl;

  private snackBar: MatSnackBar;

  posicaoHorizontalAlerta: MatSnackBarHorizontalPosition = 'right';
  posicaoVerticalAlerta: MatSnackBarVerticalPosition = 'top';
  duracaoSegundosAlerta = 3;

  opcoesFiltradas: Observable<Fkfield[]>;

  private valorInterno: any;

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  constructor (
    @Optional() @Host() @SkipSelf()
    protected injector: Injector,
    private controlContainer: ControlContainer,
    private HttpUtil: HttpUtilService,
  ) {
    this.snackBar = this.injector.get(MatSnackBar);
   }

  ngOnInit() {

    this.controlador.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map(value => typeof value === 'string' ? this.consultar(value) : this.opcoesFiltradas)
    ).subscribe(res => this.opcoesFiltradas = res);

    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control.get(this.formControlName)!;
    }
  }

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

  aoSairDoCampo(event, obj) {
    this.aoSairComTab.emit(true);
    if ((obj !== null) && obj?.value !== undefined) {
      this.consultar(obj.value);
    }
  }

  writeValue(value: any): void {
    console.log(value);
    if (typeof value !== 'object' && value && value.length > 0) {
      this.value = undefined;
     // this.buscarPorChave(this.chaveLiteral ? value : Number(value));
    } else if (value && typeof value === 'object') {
      this.value = new Fkfield(value);
    } else {
      this.value = value;
    }
  }

  setValue(v: any) {
    this.controlador.patchValue(v);
    v && v.value ? this.onChangeCb(v.value) : this.onChangeCb(v);
    this.aoSelecionar.emit(v);
  }

  limpar() {
    this.value = undefined;
    this.opcoesFiltradas = undefined;
    this.controlador.reset();
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  consultar(value: string) {
    this.limpar();
    if (value === '') {
      return this.value = undefined;
    } else {
      return this.HttpUtil.httpPost(this.tipo + "/buscarPorFkField", value)
      .pipe(
        map(resposta => {
          if (!resposta || resposta.length === 0) {
            this.snackBar.open('Cadastro não localizado', 'ATENÇÃO', {
              horizontalPosition: this.posicaoHorizontalAlerta,
              verticalPosition: this.posicaoVerticalAlerta, duration: this.duracaoSegundosAlerta * 1000
            });
          }
          return resposta;
        })
      );
    }
  }

  /** Caso o valor do campo sejá um número o componente realiza a busca por chave */
  buscarPorChave(id: any) {
    this.value = undefined;
    this.HttpUtil.httpPost(this.tipo + '/buscarPorChaveFkfield', id ).toPromise().
      then(retorno => {
        this.value = retorno;
      }).catch(error => {
        if (error.error == null) {
          console.log(error);
        } else {
          if (error.status === 400) {
            this.limpar();
          }
        }
      });
  }

  getDescricao({ label }: Fkfield) {
    const descricao = label;
    return this.retornaVazio(descricao);
  }

  private retornaVazio(valor: any): any {
    return valor ?? '';
  }

  /** Evento disparado ao selecionar o registro */
  selecionando(event) {
    // console.log(event);
   // if (event.option.value && event.option.value.value && event.option.value.value.id) {
   //   let id = event.option.value.value.id.id ? event.option.value.value.id.id : event.option.value.value.id;
   //   this.buscarPorChave(id);
   // } else {
      this.value = event.option.value;
    //}
  }

  /** Responsável por tratar os dados exibidos no campo */
  displayFn(fkfield?: Fkfield): string | undefined {
    let label = fkfield?.label;
    return this.retornaVazio(label);
  }

}
