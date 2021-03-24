import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef) {
    //console.log('Se está usando la directiva');
    //console.log(elem);
    //console.log(elem.nativeElement);
    //cambiar al elemento sobre el que aplico la directiva el estilo textdecoration
    elem.nativeElement.style.textDecoration = 'underline';
   }

}
