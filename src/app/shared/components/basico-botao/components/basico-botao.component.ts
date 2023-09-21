import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basico-botao',
  templateUrl: './basico-botao.component.html',
  styleUrls: ['./basico-botao.component.scss']
})
export class BasicoBotaoComponent implements OnInit {

  // RESPONSÁVEL PELO TÍTULO DENTRO DO BUTTON
  @Input() rotulo = "";
  // RESPONSÁVEL PELO ICONE DO BOTÃO
  @Input() icone = "";

  ngOnInit(): void {

  }

}
