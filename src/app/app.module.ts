import { OrderModule } from './order/order.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    LayoutModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [ 
    AppComponent,
  ],
})
export class AppModule { }
