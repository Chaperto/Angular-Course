import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { RouterModule } from '@angular/router'


@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule
        
    ],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: [AlunosService],
})

export class AlunosModule { } 