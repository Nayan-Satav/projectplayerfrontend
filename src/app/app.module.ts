import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { PlayerdetailsComponent } from './components/playerdetails/playerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerlistComponent,
    CreateplayerComponent,
    PlayerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
