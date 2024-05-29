import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cadSystem, cadUser, logUser } from 'src/app/models/aqua';
import { environment } from 'src/environments/environment';
import { GetTokenService } from './getToken.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AquaService {

  constructor(private http: HttpClient, private token: GetTokenService) { }

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

  registerSystem(body: cadSystem): Observable<cadSystem>{
    const headerrs = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token.getToken()}`
    })
    // console.log(body);
    return this.http.post<cadSystem>(environment.API_URL + "/sistema", body, {headers: headerrs});
  }
}
