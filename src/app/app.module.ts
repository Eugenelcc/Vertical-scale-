import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { VerticalSlidersComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxSliderModule],
  declarations: [VerticalSlidersComponent],
  bootstrap: [VerticalSlidersComponent]
})
export class AppModule {}
