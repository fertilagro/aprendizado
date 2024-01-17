import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table, TableHeaderCheckbox } from 'primeng/table';
import { BaseResourceFormComponent } from '../../base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-tabela-filha',
  templateUrl: './tabela-filha.component.html',
  styleUrls: ['./tabela-filha.component.scss']
})
export class TabelaFilhaComponent implements OnInit {

  @Input() pai: BaseResourceFormComponent<any>;
  @Input() colunas: any[];
  @Input() dados: any[];
  @Input() dataKey: string;
  @Input() selecionados: any[];
  @Input() selecionado: any;

  @Output() selecionadoChange = new EventEmitter<any>();
  @Output() selecionar = new EventEmitter<any>();
  @Output() desselecionar = new EventEmitter<any>();
  @Output() selecionadosChange = new EventEmitter<any[]>();


  tipoSelecao = 'multipla'

  @ViewChild('tabela') tabela: Table;

  constructor() { }

  ngOnInit(): void {
  }

  aoSelecionar(event: any) {
    if (this.tipoSelecao === 'multipla') {
      if (event.type === 'checkbox') {
        const index = this.selecionados.findIndex(val => val === event.data);
        index < 0 ? this.selecionados.push(event.data) : this.selecionados.splice(index, 1);
      }
    }
    this.selecionar.emit(event);
  }

  aoDesselecionar(event: any) {
    if (this.tipoSelecao === 'multipla') {
      if (event.type === 'checkbox') {
        const index = this.selecionados.findIndex(val => val === event.data);
        index < 0 ? this.selecionados.push(event.data) : this.selecionados.splice(index, 1);
      }
    }
    this.desselecionar.emit(event);
  }

}
