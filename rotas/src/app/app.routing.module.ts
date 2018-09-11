import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';




const appRoutes: Routes = [

      {path: '', component: HomeComponent,
        canActivate: [AuthGuard]
     },
        {path: 'login', component: LoginComponent},
        {path: 'cursos', component: CursosComponent,
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard},
        {path: 'curso/:id', component: CursoDetalheComponent,
        canActivate: [AuthGuard] },
        {path: 'naoEncontrado', component: CursoNaoEncontradoComponent,
        canActivate: [AuthGuard]  }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}