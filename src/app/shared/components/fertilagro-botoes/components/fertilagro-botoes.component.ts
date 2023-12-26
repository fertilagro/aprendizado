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

  @Input() desabilitarBtnAlterar = false;

  @Input() desabilitarBtnSalvar = false;

  @Input() desabilitarBtnExcluir = false;

  @Input() desabilitarBtnCancelar = false;

  @Input() desabilitarBtnPesquisar = false;

  @Output() btnClickEvent = new EventEmitter<any>();

  //**************************************************** */

  bloqueioTela = false;

  ngOnInit(): void {
    if (this.tela) {
        this.desabilitarBtnIncluir = true;
        this.desabilitarBtnAlterar = true;
        this.desabilitarBtnSalvar = true;
        this.desabilitarBtnExcluir = true;
    }
  }

  incluir() {
    if (this.tela) {
      this.btnClickEvent.emit();
      this.tela.incluir();
    }
  }

  alterar() {
    if (this.tela) {
      this.btnClickEvent.emit();
      this.tela.alterar();
    }
  }

  cancelar() {
    if (this.tela) {
      this.btnClickEvent.emit();
      this.bloqueioTela = true;
      this.tela.cancelar();
      this.bloqueioTela = false;
    }
  }

  salvar() {
    if (this.tela && !this.bloqueioTela) {
      this.btnClickEvent.emit();
      this.bloqueioTela = true;
      this.tela.salvar().finally(() => {
        this.bloqueioTela = false;
      });
    }
  }

  excluir() {
    if (this.tela) {
      this.btnClickEvent.emit();
      this.tela.excluir();
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
