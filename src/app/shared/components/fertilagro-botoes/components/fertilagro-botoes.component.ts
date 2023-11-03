import { Component, Input, Output } from '@angular/core';
import { BaseResourceFormComponent } from '../../base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-fertilagro-botoes',
  templateUrl: './fertilagro-botoes.component.html',
  styleUrls: ['./fertilagro-botoes.component.scss']
})
export class FertilAgroBotoesComponent {

  @Input() tela: BaseResourceFormComponent<any>;

  @Input() mostrarIncluir = true;

  @Input() mostrarAlterar = true;

  @Input() mostrarSalvar = true;

  @Input() mostrarExcluir = true;

  @Input() mostrarCancelar = true;

  @Input() mostrarPesquisar = true;

  @Input() desabilitarIncluir = false;

  @Input() desabilitarAlterar = false;

  @Input() desabilitarSalvar = false;

  @Input() desabilitarExcluir = false;

  @Input() desabilitarCancelar = false;

  @Input() desabilitarPesquisar = false;

  incluir() {

  }

}
