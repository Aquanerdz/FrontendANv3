import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router){}

  clicado: boolean = true;
  pathFish: String = '../../../assets/green-fish-vector.svg';
  pathProf: String = '../../../assets/white-profile.svg';



  isOnLoginOrRegisterPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/landing';
  }

  setState(click: boolean){
    if(this.clicado !== click){
      this.clicado = click;
      if(this.clicado == true ){
        this.pathFish = '../../../assets/green-fish-vector.svg'
        this.pathProf = '../../../assets/white-profile.svg'
      } else {
        this.pathFish = '../../../assets/white-fish-vector.svg'
        this.pathProf = '../../../assets/green-profile.svg'
      }
    }
  }
}
