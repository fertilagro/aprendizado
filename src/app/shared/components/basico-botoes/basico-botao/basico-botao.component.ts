import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basico-botao',
  templateUrl: './basico-botao.component.html',
  styleUrls: ['./basico-botao.component.scss']
})
export class BasicoBotoesAcaoComponent implements OnInit {

  @Input() rotulo = "";

  ngOnInit(): void {
      
  }

}
