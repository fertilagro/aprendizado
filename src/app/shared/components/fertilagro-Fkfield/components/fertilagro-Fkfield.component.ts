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

  @Input() tipoOrigem: String;
  @Input() aparencia = "outline";
  @Input() titulo: string;
  @Input() desabilitar = false;
  @Input() somenteLeitura = false;
  @Input() focus: boolean;
  @Input() nullable = false;
  @Input() formControlName: string;
  @Input() CnpjCpfMask: string;
  @Input() onFocus = new EventEmitter();


  @Output() emFoco = new EventEmitter();
  @Output() outFocus = new EventEmitter();
  @Output() aoAlterarValor = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter();

  public controlador = new FormControl();
  public inFocus = false;
  private innerValue: any;
  private control: AbstractControl;

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

  aoSairDoCampo(event, obj) {
    this.outFocus.emit(obj);
    if ((obj !== null) && obj?.value !== undefined) {
      this.consultar(obj.value);
    }
  }

  writeValue(valor: any): void {
    this.setValue(valor);
  }

  setValue(valor: any) {
    if (valor !== this.innerValue) {
      this.innerValue = valor;
      this.controlador.patchValue(valor === 0 ? null : valor);
      setTimeout(() => {
        this.onChangeCb(this.setZero(valor));
      }, 0);
      this.aoAlterarValor.emit(valor);
    } else {
      this.onChangeCb(this.setZero(valor));
    }
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
      this.HttpUtil.httpPost(this.tipoOrigem + "/buscarPorFkField", data).subscribe(

      )
    }
  }

}
