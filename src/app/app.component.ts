import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrafo: any;

  constructor(){
    this.propiedadesParrafo = {
      color: 'red',
       fontSize:'24px'
    }
  }

  cambiaColor(pColor:string){
    switch(pColor){
      case 'a':
        this.propiedadesParrafo.color = 'yellow';
        break;
      case 'r':
        this.propiedadesParrafo.color = 'red';
        break;
      case 'v':
        this.propiedadesParrafo.color = 'green';
        break;
    }

  }
  /*onChange($event){
    //la variable que estamos utilizando le camboamos su propiedad font size que tenga otro valor. Definimos valor y medida
    //ya no coge el valor definido arriba fijo
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`
    //console.log($event.target.value);//nos devuelve el valor del input. Nos aparece el valor de progreso del range
    
  }*/
  //otra opción
  onInput($event){
    //la variable que estamos utilizando le camboamos su propiedad font size que tenga otro valor. Definimos valor y medida
    //ya no coge el valor definido arriba fijo
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`
    //console.log($event.target.value);//nos devuelve el valor del input. Nos aparece el valor de progreso del range
    
  }
  
}
