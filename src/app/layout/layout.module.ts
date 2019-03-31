import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ToolBarComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    ToolBarComponent,
  ],
})
export class LayoutModule { }
