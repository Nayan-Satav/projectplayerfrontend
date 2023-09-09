import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Player } from 'src/app/model/Player';
import { PlayerserviceService } from 'src/app/playerservice.service';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrls: ['./createplayer.component.css']
})
export class CreateplayerComponent {

  constructor(private service:PlayerserviceService,private router:Router)
  {

  }
  submitted=false;
  player = new Player();


  onSubmit()
  {
    this.submitted=true;
    this.save();
  }

  save()
  {
    this.service.createPlayer(this.player).subscribe();
    this.gotoList();
  }

  gotoList()
  {
    this.router.navigate([`list`]);
  }
}
