import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CalculComponent } from './calcul/calcul.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomListComponent } from './room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoucleComponent,
    CounterComponent,
    CalculComponent,
    FirstComponent,
    RoomItemComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
