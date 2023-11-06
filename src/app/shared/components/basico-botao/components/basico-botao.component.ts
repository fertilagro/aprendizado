import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basico-botao',
  templateUrl: './basico-botao.component.html',
  styleUrls: ['./basico-botao.component.scss']
})
export class BasicoBotaoComponent {

  @Input() rotulo = "";

  @Input() icone = "";

  @Input() esconder = false;

  @Input() desabilitar = false;

  @Input() estilo = '';

  @Input('loading') isLoading: boolean;

  @Input() classe: string;

  @Input() roteador: string;

  @Output() clique = new EventEmitter();

  constructor() { }

  aoClique() {
    if (!this.desabilitar && !this.isLoading) {
      this.clique.emit();
    }
  }

}
