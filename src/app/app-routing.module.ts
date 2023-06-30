import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { BoucleComponent } from './boucle/boucle.component';
import { CalculComponent } from './calcul/calcul.component';
import { CounterComponent } from './counter/counter.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'boucle', component: BoucleComponent },
  { path: 'calcul', component: CalculComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'Rooms', component: RoomListComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
