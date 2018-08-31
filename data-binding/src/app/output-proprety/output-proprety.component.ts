import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-proprety.component.html',
  styleUrls: ['./output-proprety.component.css']
})
export class OutputPropretyComponent implements OnInit {



  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();


  
 @ViewChild('campoInput') campoValorInput:ElementRef;
  
  
  imcrementa() {
    this.campoValorInput.nativeElement.value++;
    /*this.valor++;*/
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
  /*
    this.valor--;*/
    this.mudouValor.emit({novoValor: this.valor});
  
  }
  constructor() { }

  ngOnInit() {
  }

}
