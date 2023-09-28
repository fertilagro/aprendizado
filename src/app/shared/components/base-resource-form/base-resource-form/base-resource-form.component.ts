import { Injector, OnInit, Directive } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Directive()
export abstract class BaseResourceFormComponent implements OnInit {

  resourceform: FormGroup;
  protected formBuilder: FormBuilder;

  constructor (
    protected injector: Injector
  )  {
    this.formBuilder = this.injector.get(FormBuilder);
   }

  ngOnInit() {
     this.buildResourceForm(); 
  }

  protected abstract buildResourceForm(data?: any): void;

}
