import { Component, Input, OnInit } from '@angular/core';

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
  /** largura do grid */
  @Input() largura: any[];


  ngOnInit() {

   this.dados= [
      {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
      {
          id: '1001',
          code: 'nvklal433',
          name: 'Black Watch',
          description: 'Product Description',
          image: 'black-watch.jpg',
          price: 72,
          category: 'Accessories',
          quantity: 61,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 4
      },
      {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Blue Band',
          description: 'Product Description',
          image: 'blue-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3
      }]

  this.colunas = [
      { campo: 'code', titulo: 'Code' },
      { campo: 'name', titulo: 'Name' },
      { campo: 'category', titulo: 'Category' },
      { campo: 'quantity', titulo: 'Quantity' }
  ];
  }


}