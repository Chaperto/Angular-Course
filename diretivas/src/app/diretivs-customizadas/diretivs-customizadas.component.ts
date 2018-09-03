import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivs-customizadas',
  templateUrl: './diretivs-customizadas.component.html',
  styleUrls: ['./diretivs-customizadas.component.styl']
})
export class DiretivsCustomizadasComponent implements OnInit {
  
  cursos:string[] = [];
  mostrarCursos: boolean = false;
  switchMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit() {
  }

}
