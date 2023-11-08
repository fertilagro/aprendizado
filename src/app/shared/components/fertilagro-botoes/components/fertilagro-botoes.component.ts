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
      if (this.temId()) {
        this.desabilitarBtnIncluir = false;
        this.desabilitarBtnAlterar = true;
        this.desabilitarBtnCancelar = true;
        this.desabilitarBtnSalvar = true;
        this.desabilitarBtnExcluir = true;
        this.desabilitarBtnPesquisar = false;
      } else {
        this.desabilitarBtnIncluir = false;
        this.desabilitarBtnAlterar = true;
        this.desabilitarBtnCancelar = true;
        this.desabilitarBtnSalvar = true;
        this.desabilitarBtnExcluir = true;
        this.desabilitarBtnPesquisar = false;
      }

    }
  }

  temId(): boolean {
    return this.tela && this.tela.temId(this.tela.resource);
  }

  emEdicao(): boolean {
    return this.tela && this.tela.incluindoAlterarando;
  }

  incluir() {
    this.tela.incluir();
    this.desabilitarBtnIncluir = true;
    this.desabilitarBtnAlterar = true;
    this.desabilitarBtnCancelar = false;
    this.desabilitarBtnSalvar = false;
    this.desabilitarBtnExcluir = true;
    this.desabilitarBtnPesquisar = true;
  }

  alterar() {
    this.tela.alterar();
    this.desabilitarBtnIncluir = true;
    this.desabilitarBtnAlterar = true;
    this.desabilitarBtnCancelar = false;
    this.desabilitarBtnSalvar = false;
    this.desabilitarBtnExcluir = true;
    this.desabilitarBtnPesquisar = true;
  }

  cancelar() {
    this.tela.cancelar();
    this.desabilitarBtnIncluir = false;
    this.desabilitarBtnAlterar = true;
    this.desabilitarBtnCancelar = true;
    this.desabilitarBtnSalvar = true;
    this.desabilitarBtnExcluir = true;
    this.desabilitarBtnPesquisar = false;
  }

  salvar() {
    this.tela.salvar();
    this.desabilitarBtnIncluir = false;
    this.desabilitarBtnAlterar = false;
    this.desabilitarBtnCancelar = true;
    this.desabilitarBtnSalvar = true;
    this.desabilitarBtnExcluir = true;
    this.desabilitarBtnPesquisar = false;
  }

  excluir() {
    this.tela.excluir();
  }

  pesquisar() {
    this.tela.pesquisar();
  }
}
