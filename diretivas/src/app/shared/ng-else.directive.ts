import { Directive, 
Input,
TemplateRef,
ViewContainerRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
  @Input() set ngElse(condition: boolean){
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }else{
      this._viewContainerRef.clear();
    }


  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
