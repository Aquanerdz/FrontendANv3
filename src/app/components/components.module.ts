import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CarrosselHomeComponent } from './carrossel-home/carrossel-home.component';
import { NgbAlertModule, NgbCarouselModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NavbarComponent,
    CarrosselHomeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [
    NavbarComponent,
    CarrosselHomeComponent
  ]
})
export class ComponentsModule { }
