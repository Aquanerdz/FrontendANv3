import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsystemRoutingModule } from './newsystem-routing.module';
import { NewsystemComponent } from './newsystem.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    NewsystemComponent
  ],
  imports: [
    CommonModule,
    NewsystemRoutingModule,
    ComponentsModule
  ]
})
export class NewsystemModule { }
