import { Directive, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit {

  resourceform: FormGroup;
  protected formBuilder: FormBuilder;
  incluindoAlterarando = false;
  disabilitarCampos = true;
  protected router: Router;
  public routerActive: ActivatedRoute;
  disableCampos: boolean;

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
    if (this.resourceform.get('status') instanceof FormControl) {
      this.resourceform.get("status").setValue("ATIVO")
    }
  }

  cancelar() {
    this.disabilitarCampos = true;
    this.incluindoAlterarando = false;
    this.resource = {} as T;
    if (this.incluindoAlterarando && !this.temId()) {
      this.resourceform.reset();
      this.resourceform.disable();
    } else if (this.temId()) {
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
    if (this.resourceform.getRawValue()) {
      const resource: T = this.jsonDataToResourceFn(this.validaFormAoSalvar(this.resourceform.getRawValue()));
      console.log(resource);
      this.resourceService.salvar(resource).subscribe(data => {
        if (data) {
         // this.resourceService.buscarPorId(resource);
        }
      });
    }
  }

  excluir() {
    if (this.resourceform.get('status') instanceof FormControl) {
      this.resourceform.get("status").setValue("EXCLUIDO")
    }
    this.resourceform.reset();
  }

  pesquisar() {
    this.disabilitarCampos = true;
  }

  buscarPorId() {

  }

  protected validaFormAoSalvar(data: any) {
    for (const formData of Object.keys(data)) {
      if ((data[formData] === '' || data[formData] === undefined || data[formData] === 'Invalid date') && data[formData] !== false) {
        data[formData] = null;
      }
    }
    for (const keys of Object.keys(data)) {
      if (data[keys] instanceof Object) {
        const object = data[keys];
        let allNull = true;
        for (const field of Object.keys(object)) {
          if (object[field] != null && object[field] !== 0) {
            allNull = false;
          }
        }
        if (allNull) {
          data[keys] = null;
        }
      }
    }
    return data;
  }

}
