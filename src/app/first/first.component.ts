import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'Nisreen';
  changeName() {
    this.name = 'Louna';
  }

  display = false;
  toggleDisplay() {

    this.display = !this.display;

  }

  message = '';

}
