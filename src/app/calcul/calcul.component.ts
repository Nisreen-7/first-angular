import { Component } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {
  a = 0;
  b = 0;

  result() {
    return this.a + this.b;
  }
}
