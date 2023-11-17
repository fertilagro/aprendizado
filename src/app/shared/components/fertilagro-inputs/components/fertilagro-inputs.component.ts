import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ViewChild, ElementRef,
  ContentChild, DoCheck, AfterContentInit, Optional, Host, SkipSelf } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControlName, FormControl, Validators, ControlContainer, AbstractControl } from '@angular/forms';
import { CnpjCpfMask } from '../../../directive/cnpjcpf/cnpjcpf.directive';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FertilagroInputsComponent),
  multi: true
};

@Component({
  selector: 'app-fertilagro-inputs',
  templateUrl: './fertilagro-inputs.component.html',
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class FertilagroInputsComponent implements OnInit, ControlValueAccessor, DoCheck, AfterContentInit {

  @Input() aparencia = "outline";
  @Input() titulo: string;
  @Input() desabilitar = false;
  @Input() somenteLeitura = false;
  @Input() focus: boolean;
  @Input() nullable = false;
  @Input() formControlName: string;
  @Input() CnpjCpfMask: string;


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

  ngOnInit() {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control.get(this.formControlName)!; // Note o uso de "!"
    }
  }

  aoSairDoCampo(obj) {
    this.outFocus.emit(obj);
    obj.value = obj.value?.toUpperCase()
  }

  @ViewChild('input', { static: true }) input: ElementRef;

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

  writeValue(valor: any): void {
    this.setValue(valor);
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

  ngAfterContentInit() {
    this.controlador.valueChanges.subscribe(valor => {
      if (valor !== this.innerValue) {
        this.innerValue = valor;
        this.onChangeCb(this.setZero(valor));
        this.aoAlterarValor.emit(this.setZero(valor));
        this.onValueChange(valor);
      }
    });
  }

  private onValueChange(valeu: any): any {
    this.valueChange.emit(this.setZero(valeu));
  }

  constructor (
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer
  ) { }

}
