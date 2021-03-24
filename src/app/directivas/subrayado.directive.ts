import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {
 //para utilizar en cualquier punto de la aplicación
  @Input('subrayado') config:any;


  @HostBinding('class') isHover:string;
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    //console.log('Se está usando la directiva');
    //console.log(elem);
    //console.log(elem.nativeElement);
    //cambiar al elemento sobre el que aplico la directiva el estilo textdecoration
    //elem.nativeElement.style.textDecoration = 'underline';
    //para modificar el estilo independientemente de la plataforma
    //creo un objeto
    this.config = {
      colorHover: 'green',
      colorNoHover: 'red'
    }
    this.renderer.setStyle(this.elem.nativeElement, 'textDecoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
   }
   //cuando el mouse pase por encima, cambiará el color
   @HostListener('mouseover') onHover(){
    //this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover';
   }
   //para revertir el color
   @HostListener('mouseout') ononMouseOut(){
    //this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'noHover';
   }
}
