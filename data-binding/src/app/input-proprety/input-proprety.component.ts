import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-proprety.component.html',
  styleUrls: ['./input-proprety.component.css']
})
export class InputPropretyComponent implements OnInit {


   @Input('nome') nomeCurso:string = '';

  constructor() { }

  ngOnInit() {
  }

}
