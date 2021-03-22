import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {
  personas:any[];

  constructor() { 
    this.personas = [
      {nombre:'Mario', apellidos:'Girón', edad: 36},
      {nombre:'Rosa', apellidos:'Vazquez', edad: 50},
      {nombre:'Maria', apellidos:'Fernández', edad: 26},
      {nombre:'Conxi', apellidos:'Rodríguez', edad: 45},
      {nombre:'Samuel', apellidos:'Tomás', edad: 16}
    ]
  }

  ngOnInit(): void {
  }

}
