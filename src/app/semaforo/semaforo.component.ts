import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  cadenaClases:string;
  arrayClases:string[];
  colorSeleccionado:string;

  constructor() { 
    this.cadenaClases = 'semaforo redondo rojo';
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');
    this.colorSeleccionado = 'r';//inicialitzo en un color determinat definit a .html
  }

  ngOnInit(): void {
    setInterval(() => {
     if(this.colorSeleccionado === 'r'){
       this.colorSeleccionado = 'a';       
     }else if(this.colorSeleccionado === 'a'){
         this.colorSeleccionado = 'v';
       }else if(this.colorSeleccionado === 'v'){
         this.colorSeleccionado = 'v';
       }
    },1000);
  }

}
