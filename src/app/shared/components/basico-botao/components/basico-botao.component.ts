import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseResourceFormComponent } from '../../base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-basico-botao',
  templateUrl: './basico-botao.component.html',
  styleUrls: ['./basico-botao.component.scss']
})
export class BasicoBotaoComponent {

  @Input() esconder: boolean = false;

  @Input() desabilitar: boolean = false;

  @Input() icone: string;

  @Input() rotulo: string = "";

  @Input() roteador: string;

  @Input() estilo: string = '';

  @Input('loading') isLoading: boolean;

  @Input() classe: string;

  @Output() clique = new EventEmitter();

  constructor() { }

  aoClique() {
    if (!this.desabilitar && !this.isLoading) {
      this.clique.emit();
    }
  }

}
