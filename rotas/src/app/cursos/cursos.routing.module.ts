import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';


const cursosRoutes: Routes = [
    
   
        {path: 'cursos', component: CursosComponent,
        canActivate: [AuthGuard] },
        {path: 'curso/:id', component: CursoDetalheComponent,
        canActivate: [AuthGuard] },
        {path: 'naoEncontrado', component: CursoNaoEncontradoComponent,
        canActivate: [AuthGuard] }
    
];

export const routing: ModuleWithProviders = RouterModule.forChild(cursosRoutes);