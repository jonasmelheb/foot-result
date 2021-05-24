import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../interface/match';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) { }

  list(): Observable<Match[]> {
    return this.http.get(environment.apiBaseUrl + "matchs").pipe(
      map((res: Match[]) => {
        return res;
      })
    );
  }

  show(id: number): Observable<Match> {
    return this.http.get(environment.apiBaseUrl + 'matches/' + id).pipe(
      map((res: Match) => {
        return res;
      })
    );
  }
}
