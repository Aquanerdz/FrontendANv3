import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemsRoutingModule } from './systems-routing.module';
import { SystemsComponent } from './systems.component';


@NgModule({
  declarations: [
    SystemsComponent
  ],
  imports: [
    CommonModule,
    SystemsRoutingModule,
    ComponentsModule
  ]
})
export class SystemsModule { }
