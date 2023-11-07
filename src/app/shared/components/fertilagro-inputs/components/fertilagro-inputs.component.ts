import { Component, Input, Output, DoCheck, OnInit, AfterContentInit,
  EventEmitter } from '@angular/core';
import { ControlValueAccessor, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-fertilagro-inputs',
  templateUrl: './fertilagro-inputs.component.html',
  styleUrls: ['./fertilagro-inputs.component.scss']
})
export class FertilagroInputsComponent implements OnInit {

  @Input() aparencia = "outline";
  @Input() titulo: string;
  @Input() desabilitar = false;
  @Input() soLeitura = false;
  @Input() focus: boolean;

  @Output() emFoco = new EventEmitter();
  @Output() outFocus = new EventEmitter();

  public controladores = new FormControl();
  public inFocus = false;

  ngOnInit(): void {}

  naSaidaDoCampo(obj) {
    this.outFocus.emit(obj);
  }

}
