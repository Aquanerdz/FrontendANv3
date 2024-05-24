import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
