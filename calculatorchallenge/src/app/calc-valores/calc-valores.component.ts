import { Component } from '@angular/core';
import { CalcCalculosComponent } from "../calc-calculos/calc-calculos.component";

@Component({
  selector: 'app-calc-valores',
  standalone: true,
  imports: [CalcCalculosComponent],
  templateUrl: './calc-valores.component.html',
  styleUrl: './calc-valores.component.css'
})
export class CalcValoresComponent {
  valor1 : number = 0;
  valor2 : number = 0;
  resultado : number = 0;

  //estos es para que lo que se vaya escribiendo en el input, 
  //se vaya guardando en la variable
  actualizarValor1($event : any){
    this.valor1 = $event.target.value;
  }

  actualizarValor2($event : any){
    this.valor2 = $event.target.value
  }

  //esto es para recibir el resultado y para verificar divicion por 0
  mostrarResultado($event : any){
    this.resultado = $event;
    if(this.resultado === Infinity){
      alert("No se puede dividir por 0");
      this.resultado = 0;
    }
  }
}
