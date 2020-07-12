import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DevextremeModule } from './../common/modules/devextreme.module';


@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DevextremeModule
  ],
  exports: [
    DashboardHomeComponent
  ]
})
export class DashboardModule { }
