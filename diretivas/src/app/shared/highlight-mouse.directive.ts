import { Directive, 
   ElementRef,
   Renderer,
   HostListener, 
   Host, 
   HostBinding} from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
   /* this._elementRer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color',
    'yellow');*/

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseOut(){
    /*this._elementRer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color',
    'rgb(128, 155, 255)');*/
    this.backgroundColor = 'rgb(128, 155, 255)';

  }
  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){

    return this.backgroundColor;
    
  }
  private backgroundColor: string;

  constructor(private _elementRer: Renderer,
  private _elementRef: ElementRef) { 

  }

}
