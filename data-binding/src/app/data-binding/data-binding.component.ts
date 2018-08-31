import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url:string = 'http://loiane.com';
  a: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: string  = '';
  isMouseOver: boolean = false;
  nome: string = '';
  contador: number = 0;
nomeDoCurso: string = "Angular";

    pessoa: any = {
      nome: "",
      idade: ""
    }  

  getValor(){ 

    return 1;

  }

  getTrue() {

  return true;

}
Reset(){
  this.nome = '';
  this.pessoa.nome =  "";

  this.pessoa.idade =  "";
 }

salvarValor(valor) {

  this.valorSalvo = valor;

}


botaoClicado(){
  return alert('Botao clicado!');

}
onMouseOverOut(){ 
  
this.isMouseOver = !this.isMouseOver;

}
onKeyUp(evento:KeyboardEvent){



this.valorAtual = (<HTMLInputElement>event.target).value; 



}


onMudouValor(evento){ 
  console.log(evento.novoValor);
}

  constructor() { }

  ngOnInit() {
  }

}
