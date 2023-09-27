import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from './service/consulta-cep.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.scss']
})
export class ConsultaCepComponent implements OnInit {

  resourceForm: FormGroup

    constructor(
       public consultaCepService: ConsultaCepService,
       public formBuilder: FormBuilder
       )
    {}

    ngOnInit(): void {
        this.buildResourceForm();
    }

    buildResourceForm() {
      this.resourceForm = this.formBuilder.group({
        cep: [null],
        resultado: [null]
      });
    }

    ok() {
      this.consultaCepService.consultaAPI(this.resourceForm.get("cep").value)
      .subscribe((retorno) => {
        if (retorno) {
          this.resourceForm.get("resultado").setValue(retorno?.district);
        }
      })
    }
}
