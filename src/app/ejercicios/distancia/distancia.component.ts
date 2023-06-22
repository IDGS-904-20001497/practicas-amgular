import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  x1 = '';
  x2 = '';
  y1 = '';
  y2 = '';

  resultado:number = 0;

  suma(){
    this.resultado = (parseFloat(this.x2) - parseFloat(this.x1) + 
    (parseFloat(this.y2) - parseFloat(this.y1)))
  }
}
