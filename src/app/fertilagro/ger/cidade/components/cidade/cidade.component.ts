import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { CidadeModel } from './model/cidade.model';
import { CidadeService } from './service/cidade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})
export class CidadeComponent extends BaseResourceFormComponent<CidadeModel> implements OnInit {

  estado$: Observable<any>;

  constructor(
    protected Injector: Injector,
    protected cidadeService: CidadeService,
    private httpServ: HttpUtilService,
  ) {
    super(Injector, new CidadeModel(), cidadeService, CidadeModel.fromJson);
  }

  buildResourceForm() {
    this.resourceform = this.formBuilder.group({
      id: this.formBuilder.group({
        empresa: [null],
        id: [null]
      }),
      nome: [null],
      estado: [null]
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.enums();
  }

  enums() {
    this.estado$ = this.httpServ.enumeradorService('EstadoEnum');
  }

}
