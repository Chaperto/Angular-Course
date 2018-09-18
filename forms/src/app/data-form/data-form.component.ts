import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { map  } from 'rxjs/operators';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

    formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http) { }

  ngOnInit() {
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null],
        bairro: [null],
        cidade: [null],
        estado: [null]
      })

    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map(res => res))
    .subscribe(dados => {
      console.log(dados);
      // Reseta o form
      this.resetar();
    },
    (error: any) => alert('Erro'));
  } else {
    this.verificaValidacoesForm(this.formulario);
  }
  }
  verificaValidacoesForm(formGroup: FormGroup) {
    console.log('Form invalido');
    Object.keys(formGroup.controls).forEach(campo => {
      // console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
  });

  }

  resetar() {
    return this.formulario.reset();
  }
  verificaValidTouched(campo) {
    if (this.formulario) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
    }
  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  verificaEmailInvalido() {
    if (this.formulario.get('email').errors) {
        return this.formulario.get('email').errors['email'];
    }
  }


  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
 if (cep !== '') {
   // Expressão regular para validar o CEP.
   const validacep = /^[0-9]{8}$/;
    // Valida o formato do CEP.
    if (validacep.test(cep)) {

     this.resetaDadosForm();
     this.http.get(`https://viacep.com.br/ws/${cep}/json`)
     .pipe(map((dados) => dados.json()))
     .subscribe(dados => this.populaDadosForm(dados));

    }

 }

  }
  populaDadosForm(dados) {
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
   this.formulario.patchValue({
     endereco: {
     rua: dados.logradouro,
     cep: dados.cep,
     numero: '',
     bairro: dados.bairro,
     cidade: dados.localidade,
     estado: dados.uf
     }
   });
   }
   resetaDadosForm() {
     this.formulario.patchValue({
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

