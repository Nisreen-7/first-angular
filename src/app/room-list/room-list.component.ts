import { Component } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  list: Room[] = [{
    id: 1,
    name: 'Sejour',
    surface: 15,
    opened: true,

  },
  {
    id: 2,
    name: 'Chambre de dormir',
    surface: 20,
    opened: false,
  },
  {
    id: 3,
    name: 'Salle de pain',
    surface: 5,
    opened: false,
  },
  {
    id: 4,
    name: 'Cuisine',
    surface: 4,
    opened: false,
  }];

  addRoom(room: Room) {
    this.list.push(room);
  }

  deleteRoom(room: Room) {
    this.list = this.list.filter(item => item != room);
  }
}
