import { Component } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent {
  list = ['Nisreen', 'Louna', 'Ali'];
  addItem(text: string) {
    this.list.push(text);
  }
}
