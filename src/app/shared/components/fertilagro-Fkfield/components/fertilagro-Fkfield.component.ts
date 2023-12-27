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

  public controlador = new FormControl();
  private control: AbstractControl;

  private snackBar: MatSnackBar;

  posicaoHorizontalAlerta: MatSnackBarHorizontalPosition = 'right';
  posicaoVerticalAlerta: MatSnackBarVerticalPosition = 'top';
  duracaoSegundosAlerta = 3;

  opcoesFiltradas: Observable<Fkfield[]>;

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
    this.opcoesFiltradas = undefined;
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

  consultar(value: string) {
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

  getDescricao({ label }: Fkfield) {
    const descricao = label;
    return this.retornaVazio(descricao);
  }

  private retornaVazio(valor: any): any {
    return valor ?? '';
  }

}
