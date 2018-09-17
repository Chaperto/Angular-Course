
import { Component, OnInit } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {  Http, Response  } from '@angular/http';
import { map  } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  dados: Response;
  usuario: any = {
    nome: 'Loiane',
    email: 'loiane@email.com'
  };
  constructor(
    private http: Http
  ) { }



  ngOnInit() {
    .
  }

  onSubmit(form) {
    console.log(form);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));

  }


    verificaValidTouched(campo) {
      return !campo.valid && campo.touched;
    }
  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

consultaCEP(cep, form) {

    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;
       // Valida o formato do CEP.
       if (validacep.test(cep)) {

        this.resetaDadosForm(form);
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(map((dados) => dados.json()))
        .subscribe(dados => this.populaDadosForm(dados, form));

       }

    }
}


populaDadosForm(dados, form) {
 /* form.setValue({
    nome: form.value.nome,
    email: form.value.email,
    rua: dados.logradouro,
    cep: dados.cep,
    numero: '',
    complemento: dados.complemento,
    bairro: dados.bairro,
    cidade: dados.localidade,
    estado: dados.uf
});*/

form.form.patchValue({
  rua: dados.logradouro,
  cep: dados.cep,
  numero: '',
  complemento: dados.complemento,
  bairro: dados.bairro,
  cidade: dados.localidade,
  estado: dados.uf
});

}


resetaDadosForm(form) {
  form.form.patchValue({
    rua: null,
    cep: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    estado: null
  });

}



}
