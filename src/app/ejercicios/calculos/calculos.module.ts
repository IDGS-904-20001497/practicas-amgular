import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaComponent } from '../distancia/distancia.component';


@NgModule({
  declarations: [
    DistanciaComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ]
})
export class CalculosModule { }
