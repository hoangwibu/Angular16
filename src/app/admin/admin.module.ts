import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageProductComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
