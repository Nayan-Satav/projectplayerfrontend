import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Player } from 'src/app/model/Player';
import { PlayerserviceService } from 'src/app/playerservice.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {

  public players: Observable<Player[]> = of([]);

  constructor(private service: PlayerserviceService, private router: Router) { }


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.players = this.service.getAllPlayer();
  }

  deletePlayer(id: number) {
    return this.service.deletePlayer(id).subscribe((data) => {
      console.log(data);
      this.getAll();
    })
  }

  playerDetails(id: number) {
    this.router.navigate([`details`, id])
  }

}

function playerDetails(id: number, number: any) {
  throw new Error('Function not implemented.');
}


