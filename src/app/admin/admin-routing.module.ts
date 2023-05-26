import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
    {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'product', component: ManageProductComponent },
      { path: '', component: DashboardComponent }
    ]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
