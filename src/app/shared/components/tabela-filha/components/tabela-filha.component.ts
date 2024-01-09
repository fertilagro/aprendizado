import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

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

  selecionados: any[];

  constructor(
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

}
