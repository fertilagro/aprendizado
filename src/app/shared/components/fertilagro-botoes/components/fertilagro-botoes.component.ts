import { Component, Input, OnInit, Output } from '@angular/core';
import { BaseResourceFormComponent } from '../../base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-fertilagro-botoes',
  templateUrl: './fertilagro-botoes.component.html',
  styleUrls: ['./fertilagro-botoes.component.scss']
})
export class FertilAgroBotoesComponent implements OnInit {

  @Input() tela: BaseResourceFormComponent<any>;

  @Input() desabilitarBtnIncluir = false;

  @Input() desabilitarBtnAlterar = false;

  @Input() desabilitarBtnSalvar = false;

  @Input() desabilitarBtnExcluir = false;

  @Input() desabilitarBtnCancelar = false;

  @Input() desabilitarBtnPesquisar = false;

  //**************************************************** */

  ngOnInit(): void {
    if (this.tela) {

    }
  }

  temId(): boolean {
    return this.tela && this.tela.temId(this.tela.resource);
  }

  emEdicao(): boolean {
    return this.tela && this.tela.incluindoAlterarando;
  }

  incluir() {

  }

  alterar() {

  }

  cancelar() {

  }

  salvar() {

  }

  excluir() {

  }

  pesquisar() {

  }

}
