import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    //console.log('Se está usando la directiva');
    //console.log(elem);
    //console.log(elem.nativeElement);
    //cambiar al elemento sobre el que aplico la directiva el estilo textdecoration
    //elem.nativeElement.style.textDecoration = 'underline';
    //para modificar el estilo independientemente de la plataforma
    this.renderer.setStyle(this.elem.nativeElement, 'textDecoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
   }
   //cuando el mouse pase por encima, cambiará el color
   @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
   }
   //para revertir el color
   @HostListener('mouseout') ononMouseOut(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'pink');
   }
}
