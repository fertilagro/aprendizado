import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseResourceFormComponent } from '../../base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-tabela-filha',
  templateUrl: './tabela-filha.component.html',
  styleUrls: ['./tabela-filha.component.scss']
})
export class TabelaFilhaComponent implements OnInit {

  /** Colunas que deseja montar na tabela */
  @Input() colunas: any[];
  /** Lista de registros que deseja montar na tabela */
  @Input() dados: any[];
  /** tamanho do crid */
  @Input() altura: any[];
  /** tamanho do crid */
  @Input() alturaScroll: any[];
  /** largura do grid */
  @Input() largura: any[];
  /** Define loading de carregamento da grid */
  @Input() loading: boolean;
  /** Registro que esta selecionado na tabela */
  @Input() dataKey: string;
  /** Componente pai da tabela filha (componente onde esta usando a tabela filha) */
  @Input() pai: BaseResourceFormComponent<any>;
  /** Registros que estão selecionados na tabela */
  @Input() selecionados: any[] = [];

  @Output() selecionar = new EventEmitter<any>();

    /** Define se a tabela tera a seleção habilitada */
    @Input() desabilitarSelecao = false;

<<<<<<< HEAD
  @Input() tipoSelecao:string;

  @Input() selecionados: any[];

=======
>>>>>>> 295d02c3e3c6378f275ad4f7be7183bb4ddcdbe7
  constructor(
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {

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
    this.selecionar.emit(event);
  }

}
