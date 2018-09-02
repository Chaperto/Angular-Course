import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.styl']
})
export class DiretivaNgstyleComponent implements OnInit {
ativo: boolean = false;
tamanhoFonte: number = 50;
  constructor() { }

  ngOnInit() {
  }
mudarAtivo(){
  this.ativo = !this.ativo;
}
}
