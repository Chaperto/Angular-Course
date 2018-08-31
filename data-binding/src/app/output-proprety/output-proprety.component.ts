import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-proprety.component.html',
  styleUrls: ['./output-proprety.component.css']
})
export class OutputPropretyComponent implements OnInit {



  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();


  

  
  
  imcrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  constructor() { }

  ngOnInit() {
  }

}
