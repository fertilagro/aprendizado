import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FertilAgro';
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home' },
          { label: 'Pessoa', icon: 'pi pi-fw pi-calendar' },
          { label: 'Cidade', icon: 'pi pi-fw pi-pencil' }
      ];
      this.activeItem = this.items[0];
  }

  abrirRota(EventEmitter) {
    if (EventEmitter.label === "Home")
      this.router.navigate(['/dashboard']);
    else if (EventEmitter.label === "Pessoa")
      this.router.navigate(['/pessoa']);
    else if (EventEmitter.label === "Cidade")
      this.router.navigate(['/cidade']);
    else
      this.router.navigate(['/dashboard']);
  }
}
