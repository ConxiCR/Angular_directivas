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

  
}
