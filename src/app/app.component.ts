import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FertilAgro';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  abrirLink(rota: string) {
    this.router.navigate([rota]);
  }

}
