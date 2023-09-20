import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuSistema: String = "Menu Sistema";

  userData = {
    email: 'tiago@email',
    cargo: 'programador',
  }

  title = '7projetos';
}
