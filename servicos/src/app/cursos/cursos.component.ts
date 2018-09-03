
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  
  cursos: string[] = [];
  CursosService: CursosService;

  constructor(_cursosService: CursosService) { 

    //this.CursosService = new CursosService();
    this.CursosService = _cursosService;

  }

  ngOnInit() {
    this.cursos = this.CursosService.getCursos();

    this.CursosService.emitirCursoCriado.subscribe(

      curso => console.log(curso)

    );
  }

}
