import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';
import { Profili } from './models/profili';
import { stringify } from '@angular/compiler/src/util';
import { AuthData, ServiceService } from './auth/service.service';
import { take } from 'rxjs/operators';
import { Favorite } from 'src/app/models/favorite';

export interface DashMovie {
  data: Movie;
  favId?: number;
  favIsLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NetflixService {

  urlMovie = 'http://localhost:4201';

  constructor(private http: HttpClient, private authSrv: ServiceService) { }

  mostra() {
    return this.http.get<Movie[]>(`${this.urlMovie}/movies-popular`);
  }



  async addFavorite(movieId: number) {
    const user: AuthData = (await this.authSrv.user$
      .pipe(take(1))
      .toPromise()) as AuthData;
    return this.http.post<Favorite>(`${this.urlMovie}/favorites`, {
      userId: user.user.id,
      movieId,
    });
  }

  removeFavorite(id: number) {
    return this.http.delete(`${this.urlMovie}/favorites/${id}`);
  }


  // getUser(): any {
  //   const user: any = localStorage.getItem("user");
  //   const userProfili: Profili = JSON.parse(user);
  //   console.log(userProfili)
  // }

}
