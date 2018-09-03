import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {



  constructor(
    private _elementRer: Renderer,
    private _elementRef: ElementRef
  ) {

   // this._elementRef.nativeElement.style.backgroundColor = "yellow";
    this._elementRer.setElementStyle(
    this._elementRef.nativeElement,
     'background-color', 
     'yellow'
    )

   }

}
