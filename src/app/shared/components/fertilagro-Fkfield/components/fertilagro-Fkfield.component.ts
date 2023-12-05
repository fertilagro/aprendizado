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
import { MessageService } from 'primeng/api';

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

  public controlador = new FormControl();
  private control: AbstractControl;

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  constructor (
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
    private HttpUtil: HttpUtilService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control.get(this.formControlName)!;
    }
  }

  set value(v: any) {
      this.setValue(v);
  }

  aoSairDoCampo(event, obj) {
    this.aoSairComTab.emit(true);
    if ((obj !== null) && obj?.value !== undefined) {
      this.consultar(obj.value);
    }
  }

  writeValue(value: any): void {
     console.log(value);
  }

  setValue(v: any) {
    this.controlador.patchValue(v);
    v && v.value ? this.onChangeCb(v.value) : this.onChangeCb(v);
  }

  limpar() {
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
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
      this.limpar();
      this.HttpUtil.chamarServicoPost(this.tipo + "/buscarPorFkField", data)
      .subscribe(retorno => {
        if (retorno.content[0] != undefined) {
          this.value = retorno.content[0].id + " - " +retorno.content[0].nome;
        } else {
          this.messageService.add({ severity: 'info', summary: 'Informação', detail: 'Cadastro não localizado' });
        }
      });
    }
  }

}
