import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cadUser, logUser } from 'src/app/models/aqua';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AquaService {

  constructor(private http: HttpClient) { }

  registerUser(body: cadUser): Observable<cadUser> {
       console.log(body);
      return this.http.post<cadUser>(environment.API_URL + "/user", body);
  }

  loginUser(body: logUser): Observable<logUser> {

    // return console.log(body); }
    // console.log(body)
    // o subscribe é o corpo do meu retorno, sempre que a api retornar algo
    return this.http.post<logUser>(environment.API_URL + "/login", body);
  }
}
