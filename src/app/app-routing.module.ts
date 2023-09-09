import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { PlayerdetailsComponent } from './components/playerdetails/playerdetails.component';

const routes: Routes = [
  {
    path:'list',
    component:PlayerlistComponent
  },
  {
    path:'save',
    component:CreateplayerComponent
  },
  {
    path:'delete',
    component:PlayerlistComponent
  },
  {
    path:'details/:playerId',
    component:PlayerdetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
