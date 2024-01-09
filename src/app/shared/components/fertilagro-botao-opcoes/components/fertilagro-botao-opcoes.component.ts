import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'app-fertilagro-botao-opcoes',
    templateUrl: './fertilagro-botao-opcoes.component.html',
    styleUrls: ['./fertilagro-botao-opcoes.component.scss']
  })
export class FertilAgroBotaoOpcoesComponent implements OnInit {

    @Input() menuOpcoes: any[];

    @Input() desabilitarBtnMenuOpcoes = false;

    ngOnInit(): void {
        this.menuOpcoes = [
            {
              label: 'Update',
              icon: 'pi pi-refresh',
              command: () => {
              //    this.update();
              }
          },
          {
              label: 'Delete',
              icon: 'pi pi-times',
              command: () => {
                 // this.delete();
              }
          },
          ];
    }

}