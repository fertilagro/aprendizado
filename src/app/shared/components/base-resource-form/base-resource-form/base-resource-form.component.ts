import { Directive, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit {

  resourceform: FormGroup;
  incluindoAlterarando = false;
  disabilitarCampos = true;
  bloqueioTela = false;
  disableCampos: boolean;

  protected formBuilder: FormBuilder;
  protected router: Router;
  protected mensagem: MessageService;
  private snackBar: MatSnackBar
  public routerActive: ActivatedRoute;

  posicaoHorizontalAlerta: MatSnackBarHorizontalPosition = 'right';
  posicaoVerticalAlerta: MatSnackBarVerticalPosition = 'top';
  duracaoSegundosAlerta = 3;


  constructor (
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
  ) {
    this.formBuilder = this.injector.get(FormBuilder);
    this.router = this.injector.get(Router);
    this.routerActive = this.injector.get(ActivatedRoute);
    this.snackBar = this.injector.get(MatSnackBar);
    this.mensagem = this.injector.get(MessageService);
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

  public async salvar(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.disabilitarCampos = true;
      this.incluindoAlterarando = false;
      const resource: T = this.jsonDataToResourceFn(this.validaFormAoSalvar(this.resourceform.getRawValue()));
      console.log(resource);
      if (this.resourceform.valid) {
        this.resourceService
          .salvar(resource)
          .pipe(take(1))
          .subscribe(response => {
            this.incluindoAlterarando = false;
            this.buildForm(response);
            this.resource = response;
            this.bloqueioTela = false;
            resolve(response);
          }, error => {
            this.disableCampos = false;
            this.bloqueioTela = false;
            reject(error);
          })
      } else {
        this.disableCampos = false;
        this.bloqueioTela = false;
        this.incluindoAlterarando = true;
        this.checkValidationsForm(this.resourceform);
        reject('Erro de validações');
      }
    });
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

  protected buildForm(data: any, formGroup?: FormGroup, recursivo = false) {
    const json = {};
    if (!formGroup) {
      formGroup = this.resourceform;
    }
    formGroup.reset();
    for (const formData of Object.keys(formGroup.getRawValue())) {
      if (data) {
        for (const elementData of Object.keys(data)) {
          if (elementData === formData) {
            if (data[elementData] != null && data[elementData] !== undefined && data[elementData] !== 'Invalid date') {
              if (recursivo && formGroup.get(formData) instanceof FormGroup) {
                this.buildForm(data[elementData], formGroup.get(formData) as FormGroup, recursivo);
              } else {
                json[formData] = data[elementData];
              }
            } else {
              if (formGroup.get(formData) instanceof FormArray) {
                /**
                 * se houver adição de novos tipos de objeto ao formGroup adicionar
                 * mais else if com as respectivas instancias e inicializações
                 */
                json[formData] = [];
              } else {
                json[formData] = '';
              }
            }
            break;
          }
        }
      }
    }
    formGroup.patchValue(json);
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

  public checkValidationsForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
       console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.checkValidationsForm(controle);
      }
      if (controle.errors != null) {
          this.snackBar.open(`O campo ${campo} é obrigatório `, 'ATENÇÃO', {
            horizontalPosition: this.posicaoHorizontalAlerta,
            verticalPosition: this.posicaoVerticalAlerta, duration: this.duracaoSegundosAlerta * 1000
          });
      }
    });
  }

}
