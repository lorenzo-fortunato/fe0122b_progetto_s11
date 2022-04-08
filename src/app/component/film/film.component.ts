import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DashMovie, NetflixService } from 'src/app/netflix.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  arrMovie!: Movie[];
  film!: any;



  constructor(private srvNet: NetflixService) { }

  async ngOnInit() {

    this.film = await this.srvNet.mostra().toPromise();
    this.arrMovie = this.film
    console.log(this.arrMovie)
  }



}
