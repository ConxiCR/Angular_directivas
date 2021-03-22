import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {
  personas:any[];

  constructor() { 
    /*this.personas = [
      {nombre:'Mario', apellidos:'Girón', edad: 36},
      {nombre:'Rosa', apellidos:'Vazquez', edad: 50},
      {nombre:'Maria', apellidos:'Fernández', edad: 26},
      {nombre:'Conxi', apellidos:'Rodríguez', edad: 45},
      {nombre:'Samuel', apellidos:'Tomás', edad: 16}
    ]*/
    this.personas = [
      {nombre:'Mario', apellidos:'Girón Pabón', calle: 'ctra. de Siles, 16', telefono:'741 385 960'},
      {nombre:'Rosa', apellidos:'Vazquez Carmona', calle: 'Avda.Rio Nalon, 7', telefono:'741 385 960'},
      {nombre:'Maria', apellidos:'Fernández Sierra', calle: 'Plazuela do Porto, 90', telefono:'741 385 960'},
      {nombre:'Conxi', apellidos:'Rodríguez Yañez', calle: 'Salzillo, 60', telefono:'741 385 960'},
      {nombre:'Samuel', apellidos:'Tomás Godoy', calle: 'Cañadilla, 47', telefono:'741 385 960'}
    ]
  }

  ngOnInit(): void {
  }
  onClick(){
    //para agregar una nueva persona
      this.personas.push({
        nombre:'Mark', apellidos:'Eusebio', calle:'Gran Via, 21', telefono: '3343 9989'
      })
  }
}
