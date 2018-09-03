import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
     titulo:'Learning JavaScrpit',
     rating: 4.54321,
     numeroPaginas: 314,
     preco: 45.00,
     dataLancamento: new Date(2016,5,23), //Indice do mes começa em 0.
     url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit() {
  }

}
