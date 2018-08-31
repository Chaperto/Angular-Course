import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-proprety.component.html',
  styleUrls: ['./input-proprety.component.css'],
  inputs: ['nomeCurso: nome'] 
  
  //para utilizar o nomeCurso internamente de input-proprety e nome para fora.
})
export class InputPropretyComponent implements OnInit {
  


  @Input('nome') nomeCurso: string = "";
  
  //para utilizar o nomeCurso internamente de input-proprety e nome para fora.

  constructor() { }

  ngOnInit() {
  }

}
