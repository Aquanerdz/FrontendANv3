import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CarrosselHomeComponent } from './carrossel-home/carrossel-home.component';
import { NgbAlertModule, NgbCarouselModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { OxigenComponent } from './oxigen/oxigen.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    NavbarComponent,
    CarrosselHomeComponent,
    OxigenComponent,
    TemperatureComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbPaginationModule,
    NgbAlertModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [
    NavbarComponent,
    CarrosselHomeComponent,
    OxigenComponent
  ]
})
export class ComponentsModule { }
