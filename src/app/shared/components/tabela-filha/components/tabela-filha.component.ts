import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() selecionados: any[] = [];
  @Input() selecionado: any;
  @Input() tipoSelecao: string;

  @Output() selecionar = new EventEmitter<any>();
  @Output() selecionadosChange = new EventEmitter<any[]>();
  @Output() selecionadoChange = new EventEmitter<any>();

  constructor(
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.tipoSelecao = "multipla";
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  aoSelecionar(event: any) {
    if (this.tipoSelecao === 'multipla') {
      if (event.type === 'checkbox') {
        const index = this.selecionados.findIndex(val => val === event.data);
        index < 0 ? this.selecionados.push(event.data) : this.selecionados.splice(index, 1);
      }
    }
    // permite que outras partes do código sejam notificadas sobre a seleção
    this.selecionar.emit(event);
  }

  aoAlterarSelecao(event: any[]) {
  /*  if (this.tipoSelecao === 'multipla') {
      this.selecionados = event;
      this.selecionadosChange.emit(this.selecionados);
      this.selecionadoChange.emit(event.length > 0 ? event[event.length - 1] : undefined);
    } else {
      this.selecionado = event;
      this.selecionadoChange.emit(event);
    }*/
  }

}
