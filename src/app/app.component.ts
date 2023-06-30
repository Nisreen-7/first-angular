import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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

