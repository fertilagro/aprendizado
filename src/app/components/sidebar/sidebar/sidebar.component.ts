import { Component, OnInit } from '@angular/core';
import { SidebarService } from './service/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // menulista = [{
  //   id: 1,
  //   nome: "Principal",
  // },
  // {
  //   id: 2,
  //   nome: "Pessoa",
  // },
  // {
  //   id: 3,
  //   nome: "Material",
  // },
  // ];

  constructor(
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    const arrayModulos: Observable<any> = this.sidebarService.getBuscaModulos("/modulos");
  }

}
