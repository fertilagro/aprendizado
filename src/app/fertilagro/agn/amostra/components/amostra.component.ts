import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from "src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component";
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { AmostraModel } from "./model/amostra.model";
import { AmostraService } from './service/amostra.service';
import { Observable } from 'rxjs';


@Component({
selector: 'app-amostra',
templateUrl: './amostra.component.html',
styleUrls: ['./amostra.component.scss']
})
export class amostraComponent extends BaseResourceFormComponent<AmostraModel> implements OnInit {

    matriz$: Observable<any>;

    constructor(
        protected Injector: Injector,
        private httpServ: HttpUtilService,
        private amostraService: AmostraService
      ) {
        super(Injector, new AmostraModel(), amostraService, AmostraModel.fromJson);
      }

    buildResourceForm() {
        this.resourceform = this.formBuilder.group({
            id: this.formBuilder.group({
                empresa: [null],
                id: [null]
            }),
            propriedade: [null],
            cliente: [null],
            solicitante: [null],
            entrada: [null],
            saida: [null],
            descricaoAmostra: [null],
            matriz: [null],
            tipoAnalise: [null],
            valor: [null],
            observacao: [null],
        });
    }

    override ngOnInit(): void {
        this.enums();
        super.ngOnInit();
    }

    enums() {
        this.matriz$ = this.httpServ.enumeradorService('MatrizEnum');
    }

    formatarValor() {
      let valor = this.resourceform.get("valor").value;
      this.resourceform.get("valor").setValue(super.mascaraMoedaReal(valor));
    }

}
