import { Directive,
   Renderer,
   HostListener,
   ElementRef,
   Input,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
 @Input() defaultColor: string =  'rgb(128, 155, 255)';
 @Input('highlight') highlightColor:string = 'yellow';

  @HostListener('mouseenter') onMouseOver(){
    /* this._elementRer.setElementStyle(
     this._elementRef.nativeElement,
     'background-color',
     'yellow');*/
 
     this.backgroundColor = this.highlightColor;
   }
 
   @HostListener('mouseleave') onMouseOut(){
     /*this._elementRer.setElementStyle(
     this._elementRef.nativeElement,
     'background-color',
     'rgb(128, 155, 255)');*/
     this.backgroundColor = this.defaultColor;
 
   }
   @HostBinding('style.backgroundColor') backgroundColor: string;
   /*@HostBinding('style.backgroundColor') get setColor(){
 
     return this.backgroundColor;
     
   }*/
 
   constructor() { 
 
   }
 
 }