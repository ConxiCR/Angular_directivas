import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    //console.log('Se está usando la directiva');
    //console.log(elem);
    //console.log(elem.nativeElement);
    //cambiar al elemento sobre el que aplico la directiva el estilo textdecoration
    //elem.nativeElement.style.textDecoration = 'underline';
    //para modificar el estilo independientemente de la plataforma
    renderer.setStyle(elem.nativeElement, 'textDecoration', 'underline');
    renderer.setStyle(elem.nativeElement, 'color', 'indigo');
   }

}
