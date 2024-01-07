import { Component, ElementRef, EventEmitter, Host, Input, OnInit, Optional, Output, SkipSelf, ViewChild, forwardRef } from '@angular/core';

import { AbstractControl, ControlContainer, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import * as moment from 'moment';

export const DATA_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FertilAgroDataComponent),
  multi: true
};

@Component({
  selector: 'app-fertilagro-data',
  templateUrl: './fertilagro-data.component.html',
  providers: [DATA_CONTROL_VALUE_ACCESSOR],
})
export class FertilAgroDataComponent implements OnInit {

  @Input() rotulo: string;
  @Input() desabilitarPopUp = false;
  valorInterno: Date;
  @Input() desabilitar = false;
  /** Define se o campo terá o foco automático */
  @Input() focus: boolean;
  /** Evento disparado ao perder o foco */
  @Output() outFocus = new EventEmitter();
  /** Evento disparado ao alterar o valor */
  @Output() aoAlterarValor = new EventEmitter<any>();

  /* Elemento de referencia do DOM do Input */
  @ViewChild('input', { static: true }) input: ElementRef;

  controlador = new FormControl();
  /** Control referente ao campo no formulário reativo. */
  @Input() formControlName: string;
  private control: AbstractControl;
  valorDatePicker = null;

  public mask = {
    guide: true,
    showMask: true,
    // keepCharPositions : true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };

  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer
  ) { }

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  ngOnInit() {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control.get(this.formControlName);
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

  setValue(v: any) {
    if (v !== this.valorInterno) {
      this.valorInterno = v;
      let data = null;
      let form = null;
      const momentDate = moment(v);
      if (momentDate.isValid()) {
        data = momentDate.format('YYYY-MM-DD');
        form = momentDate.format('DD/MM/YYYY');
      }
      this.valorDatePicker = this.valorInterno;
      this.controlador.setValue(form);
      this.onChangeCb(data);
      this.aoAlterarValor.emit(data);
    }
  }

  eventoDatapiker(evento) {
    this.setValue(evento.value);
    this.aoSairDoCampo();
  }

  /** Ao alterar o valor do formulário reativo o método será disparado */
  writeValue(value: any): void {
    this.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  aoAlterar(event) {
     console.log(event);
  }

  /** Método responsável por converter a data digitada em objeto do tipo Date */
  converterParaData(input) {
    const value = input.target.value;
    if (value && value.length === 10) {
      const parts = value.split('/');
      const data = new Date(Number.parseInt(parts[2]), Number.parseInt(parts[1]) - 1, Number.parseInt(parts[0]));
      if (data instanceof Date && isNaN(data.getTime())) {
        this.setValue(null);
      } else {
        this.setValue(data);
      }
    } else {
      this.setValue(null);
      input.target.value = '';
    }
  }

  dataHoje(event) {
    if (event.code === 'KeyD') {
      this.setValue(new Date());
    }
  }

  aoSairDoCampo() {
    this.outFocus.emit(true);
  }
}
