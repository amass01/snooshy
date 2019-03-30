import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    ToolBarComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ToolBarComponent,
  ],
})
export class LayoutModule { }
