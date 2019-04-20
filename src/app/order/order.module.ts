import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class OrderModule { }
