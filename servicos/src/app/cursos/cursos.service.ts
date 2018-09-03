import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();


    cursos: string[] = ['Angular', 'Java', 'Phonegap'];
constructor(private logService: LogService){

    console.log('CursosService');
}
        

getCursos(){ 
    return this.cursos;
}
addCurso(curso: string){
    this.logService.consoleLog(`Criando novo curso: ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
}


}