import { routing } from './../app.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
//import { CursosRoutingModule } from './cursos.routing.module'
@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],

    imports: [
    CommonModule,
    routing,
    //CursosRoutingModule
 
],
    exports: [],
    providers: [
        CursosService
    ],
})
export class CursosModule {}