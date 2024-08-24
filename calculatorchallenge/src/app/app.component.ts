import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcValoresComponent } from "./calc-valores/calc-valores.component";
import { CalcCalculosComponent } from "./calc-calculos/calc-calculos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcValoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculatorchallenge';
}
