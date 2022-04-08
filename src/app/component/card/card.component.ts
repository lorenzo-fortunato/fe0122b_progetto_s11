import { Component, Input, OnInit } from '@angular/core';
import { DashMovie, NetflixService } from 'src/app/netflix.service';
import { Movie } from 'src/app/models/movie';
import { Profili } from 'src/app/models/profili';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie

  movies!: DashMovie[];

  constructor(private srvNet: NetflixService) { }

  ngOnInit() {
  }

  async addFav(idM: number, i: number) {
    this.movies[i].favIsLoading = true;
    try {
      const newFav = await (await this.srvNet.addFavorite(idM)).toPromise();
      this.movies[i].favIsLoading = false;
      this.movies[i] = { ...this.movies[i], favId: newFav.id };
      console.log(this.movies[i]);
    } catch (error) {
      this.movies[i].favIsLoading = false;
      alert(error);
    }
  }
  async removeFav(idF: number, i: number) {
    this.movies[i].favIsLoading = true;
    try {
      await this.srvNet.removeFavorite(idF).toPromise();
      this.movies[i].favIsLoading = false;
      this.movies[i] = { ...this.movies[i], favId: undefined };
      console.log(this.movies[i]);
    } catch (error) {
      this.movies[i].favIsLoading = false;
      alert(error);
    }
  }


}
