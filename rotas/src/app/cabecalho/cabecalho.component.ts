import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
@Output() idCurso: number;
  constructor() { }

  ngOnInit() {
  }
  IdValue(){

    console.log(this.idCurso);

  }

}
