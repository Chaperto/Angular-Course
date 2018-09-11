import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
///import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
//import { AlunosComponent } from './alunos/alunos.component';
import { AuthService } from './login/auth.service';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //CursosComponent,
    CabecalhoComponent,
    
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    CursosModule,
    AppRoutingModule,
    AlunosModule
  
  ],
  providers: [
    //CursosService
    AuthService,
    AuthGuard,
    CursosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
