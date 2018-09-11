import { AuthGuard } from './guards/auth.guard';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
//import { NgModule } from '@angular/core';

//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const appRoutes: Routes = [
    /*
        {path: '', component: LoginComponent,
        canActivate: [AuthGuard]            },
        {path: 'login', component: LoginComponent,
        canActivate: [AuthGuard] },
        {path: 'alunos', component: AlunosComponent, children: [
                {path: 'novo', component: AlunoFormComponent},
                {path: ':id', component: AlunoDetalheComponent},
                {path: ':id/editar', component: AlunoFormComponent}

        ],
        canActivate: [AuthGuard] },*/

    
        
       // {path: 'cursos', component: CursosComponent},
      //  {path: 'curso/:id', component: CursoDetalheComponent},
       // {path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);