import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  menulista = [{
    id: 1,
    nome: "Principal",
  },
  {
    id: 2,
    nome: "Pessoa",
  },
  {
    id: 3,
    nome: "Material",
  },
  ];

  constructor() {}

}
