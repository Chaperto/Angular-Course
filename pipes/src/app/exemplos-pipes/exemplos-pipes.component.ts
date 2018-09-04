import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
}

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  filtro: string = '';

  curso:  string;

  livro: any = {

     titulo:'Learning JavaScrpit',
     rating: 4.54321,
     numeroPaginas: 314,
     preco: 45.00,
     dataLancamento: new Date(2016,5,23), //Indice do mes começa em 0.
     url: 'http://a.co/glqjpRP'

  }
  valorAsync = new Promise((resolve, reject)=>{

    setTimeout(() => resolve('Valor assíncrono'), 2000)

  });

    livros: string [] = ['Angular 2', 'Java', 'JavaScript'];
  constructor() { }

  ngOnInit() {
  }
  AddCurso(valor: string){
    if(this.filtro != ''){
 this.livros.push(valor);}
 else{
   alert("Digite o nome do curso!")
 }
  }

    obterCurso(){
      if(this.livros.length === 0 || this.filtro === null 
      || this.filtro.trim() === ''){
        return this.livros;
      }
      return this.livros.filter((v) => {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
          return true;
        }
        return false;
      });
    }
}
