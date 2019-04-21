import { HomeComponent } from './../layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from '../order/order.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 'Home'
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: {
      animation: 'Order'
    }
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
