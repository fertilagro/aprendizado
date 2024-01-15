import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseResourceFormComponent } from '../../base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-fertilagro-botoes',
  templateUrl: './fertilagro-botoes.component.html',
  styleUrls: ['./fertilagro-botoes.component.scss']
})
export class FertilAgroBotoesComponent implements OnInit {

  @Input() tela: BaseResourceFormComponent<any>;

  @Input() mostrarIncluir = true;

  @Input() mostrarAlterar = true;

  @Input() mostrarSalvar = true;

  @Input() mostrarExcluir = true;

  @Input() mostrarCancelar = true;

  @Input() mostrarPesquisar = true;

  @Input() desabilitarBtnIncluir = false;

  @Input() desabilitarBtnSalvar = false;

  @Input() desabilitarBtnAlterar = false;

  @Input() desabilitarBtnExcluir = false;

  @Input() desabilitarBtnCancelar = false;

  @Input() desabilitarBtnPesquisar = false;

  @Output() btnClickEvent = new EventEmitter<any>();

  //**************************************************** */

  bloqueioTela = false;

  ngOnInit(): void {
    if (this.tela) {
        this.desabilitarBtnIncluir = false;
        this.desabilitarBtnAlterar = true;
        this.desabilitarBtnExcluir = true;
        this.desabilitarBtnCancelar = true;
        this.desabilitarBtnSalvar = true;
    }
    if (this.temId()) {

    }
  }

  incluir() {
    if (this.tela) {
      this.desabilitarBtnIncluir = true;
      this.desabilitarBtnCancelar = false;
      this.desabilitarBtnPesquisar = true;
      this.desabilitarBtnSalvar = false;

      this.btnClickEvent.emit();
      this.tela.incluir();
    }
  }

  salvar() {
    if (this.tela && !this.bloqueioTela) {
      this.btnClickEvent.emit();
      this.bloqueioTela = true;
      this.tela.salvar().finally(() => {
        this.bloqueioTela = false;
        this.desabilitarBtnIncluir = false;
        this.desabilitarBtnAlterar = false;
        this.desabilitarBtnCancelar = true;
        this.desabilitarBtnSalvar = true;
        this.desabilitarBtnPesquisar = false;
      });
    }
  }

  alterar() {
    if (this.tela) {
      if (this.temId()) {
        this.desabilitarBtnIncluir = true;
        this.desabilitarBtnAlterar = false;
        this.desabilitarBtnCancelar = false;
        this.desabilitarBtnSalvar = false;
        this.desabilitarBtnExcluir = true;
        this.desabilitarBtnPesquisar = true;
      }
      this.btnClickEvent.emit();
      this.tela.alterar().finally(() => {
      });
    }
  }

  cancelar() {
    if (this.tela) {
      if (this.temId()) {
        this.desabilitarBtnIncluir = false;
        this.desabilitarBtnAlterar = false;
        this.desabilitarBtnCancelar = true;
        this.desabilitarBtnSalvar = true;
        this.desabilitarBtnExcluir = false;
        this.desabilitarBtnPesquisar = false;
      } else {
        this.desabilitarBtnCancelar = true;
        this.desabilitarBtnPesquisar = false;
        this.desabilitarBtnSalvar = true;
        this.desabilitarBtnIncluir = false;
      }

      this.btnClickEvent.emit();
      this.bloqueioTela = true;
      this.tela.cancelar().finally(() => {
        this.bloqueioTela = false;
      });
    }
  }

  excluir() {
    if (this.tela) {
      this.btnClickEvent.emit();
      this.tela.excluir().finally(() => {
        this.bloqueioTela = false;
      });
    }
  }

  pesquisar() {
    if (this.tela) {
      this.btnClickEvent.emit();
      this.tela.pesquisar();
    }
  }

  temId(): boolean {
    return this.tela && this.tela.temId(this.tela.resource);
  }

  emEdicao(): boolean {
    return this.tela && this.tela.incluindoAlterarando;
  }
}
