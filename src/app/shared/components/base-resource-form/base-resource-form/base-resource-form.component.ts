import { Injector, OnInit, Directive } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit {

  resourceform: FormGroup;
  protected formBuilder: FormBuilder;
  incluindoAlterarando = false;
  disabilitarCampos = true;
  protected router: Router;
  public routerActive: ActivatedRoute;

  constructor (
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
  ) {
    this.formBuilder = this.injector.get(FormBuilder);
    this.router = this.injector.get(Router);
    this.routerActive = this.injector.get(ActivatedRoute);
  }

  ngOnInit() {
     this.buildResourceForm();
     this.disabilitarCampos = true;
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
    if (this.resourceform) {
      this.resourceform.reset();
    }
    this.resource = {} as T;
  }

  cancelar() {
    this.resource = {} as T;
    if (this.incluindoAlterarando && !this.temId()) {
      this.resourceform.reset();
      this.resourceform.disable();
      this.disabilitarCampos = true;
      this.incluindoAlterarando = false;
    } else if (this.temId()) {
      this.disabilitarCampos = true;
      this.incluindoAlterarando = false;
      this.resourceform.disable();
    }
  }

  alterar() {
    this.incluindoAlterarando = true;
    this.disabilitarCampos = true;
  }

  salvar() {
    this.disabilitarCampos = true;
    this.incluindoAlterarando = false;
  }

  excluir() {
    this.resourceform.reset();
  }

  pesquisar() {
    this.disabilitarCampos = true;
  }

}
