import {
  Component,
  DoCheck,
  EventEmitter,
  Host,
  Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
  forwardRef
} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  @Input() aparencia = "outline";
  @Input() titulo: string;
  @Input() desabilitar = false;
  @Input() somenteLeitura = false;
  @Input() focus: boolean;
  @Input() nullable = false;
  @Input() formControlName: string;
  @Input() CnpjCpfMask: string;
  @Input() onFocus = new EventEmitter();
  @Input() chaveLiteral = false;
  @Input() pai: FertilAgroFkFieldComponent;
  @Input() filtroPai = true;

  @Output() emFoco = new EventEmitter();
  @Output() outFocus = new EventEmitter();
  @Output() aoAlterarValor = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter();

  public controlador = new FormControl();
  public inFocus = false;
  private innerValue: any;
  private control: AbstractControl;
  private valorInterno: any;
  selecionados: any[];
  labelSelecionados: string;
  private ultimoValorPai: any;

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  constructor (
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
    private HttpUtil: HttpUtilService
  ) { }

  ngOnInit() {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control.get(this.formControlName)!; // Note o uso de "!"
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
    this.outFocus.emit(obj);
    if ((obj !== null) && obj?.value !== undefined) {
      this.consultar(obj.value);
    }
  }

  writeValue2(valor: any): void {
    this.setValue(valor);
  }

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

  setValue(v: any) {
    this.limparLabelSelecionados(v);
    this.valorInterno = v;
    this.controlador.patchValue(v);
    v && v.value ? this.onChangeCb(v.value) : this.onChangeCb(v);
  }

  private limparLabelSelecionados(valor: any) {
    if ((!valor || !(valor instanceof Array)) &&
      this.labelSelecionados !== null) {

    }
  }

    /** Caso o valor do campo sejá um número o componente realiza a busca por chave */
    buscarPorChave(id: any) {
      this.value = undefined;
      if (this.pai && this.pai.value && this.filtroPai === true) {
        this.ultimoValorPai = this.pai.value.value.id;
      }
      this.HttpUtil.httpPost(this.tipo + '/buscarPorChaveFkfield',
        { id, pai: this.ultimoValorPai }).toPromise().
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

  limpar() {

  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  private setZero(valor: number): number {
    return (valor === null || valor === undefined) ? this.nullable ? null : 0 : valor;
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

  consultar(data: any) {
    if (data !== null) {
      this.HttpUtil.chamarServicoPost(this.tipo + "/buscarPorFkField", data)
      .subscribe(retorno => {
        if (retorno != null) {

         this.value = retorno;
        }
      });
    }
  }



}
