import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-calculos',
  standalone: true,
  imports: [],
  templateUrl: './calc-calculos.component.html',
  styleUrl: './calc-calculos.component.css'
})
export class CalcCalculosComponent {
  @Input() num1 : number = 0;
  @Input() num2 : number = 0;
  resultado : number = 0;

  @Output() resultadoEvent = new EventEmitter<number>();

  suma(){
    this.resultado = (+this.num1 + +this.num2);
    console.log(this.resultado)
    this.sendResultado();
  }

  resta(){
    this.resultado = this.num1 - this.num2;
    console.log(this.resultado)
    this.sendResultado();
  }
  
  multiplicacion(){
    this.resultado = this.num1 * this.num2;
    console.log(this.resultado)
    this.sendResultado();
  }

  divicion(){
    /*
    if(this.num1 == 0 || this.num2 == 0){
      alert("No se puede dividir por 0")
    } else {
      this.resultado = this.num1 / this.num2;
      console.log(this.resultado);
    }
    */

    this.resultado = this.num1 / this.num2;
    if (this.resultado === Infinity){
      console.log("No se puede dividir por 0")
    } else {
      console.log(this.resultado);
    }
    this.sendResultado();
  }

  potencia(){
    this.resultado = this.num1 ** this.num2;
    console.log(this.resultado)
    this.sendResultado();
  }

  sendResultado(){
    this.resultadoEvent.emit(this.resultado);
  }
}
