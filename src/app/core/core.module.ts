import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  declarations: [ToolBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    AppRoutingModule,
  ]
})
export class CoreModule { }
