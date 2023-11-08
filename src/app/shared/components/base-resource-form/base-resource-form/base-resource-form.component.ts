import { Injector, OnInit, Directive } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit {

  resourceform: FormGroup;
  protected formBuilder: FormBuilder;
  incluindoAlterarando = false;
  disabilitarCampos = true;

  constructor (
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
  ) {
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
     this.buildResourceForm();
  }

  protected abstract buildResourceForm(data?: any): void;

  public temId(resource?: T): boolean {
    if (resource) {
      if (!resource.id) {
        return false;
      } else if (typeof (resource.id) === 'object' && !resource.id.id) {
        return false;
      } else {
        return true;
      }
    } else if (this.resourceform && this.resourceform.getRawValue().id === null) {
      return false;
    } else if (this.resourceform && this.resourceform.getRawValue().id.id === null) {
      return false;
    }
    return true;
  }

  incluir() {
    this.disabilitarCampos = false;
    this.incluindoAlterarando = true;
  }

  cancelar() {
    this.disabilitarCampos = true;
    this.incluindoAlterarando = false;
  }

  alterar() {
    this.disabilitarCampos = false;
    this.incluindoAlterarando = true;
  }

  salvar() {
    this.disabilitarCampos = true;
  }

  excluir() {
    this.disabilitarCampos = true;
  }

  pesquisar() {
    this.disabilitarCampos = true;
  }

}
