import { MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
  ],
})
export class SharedModule { }
