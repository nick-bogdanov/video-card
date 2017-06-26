import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component';
import { EBayComponent } from './eBay/eBay.component';

import { MaterialModule } from './app.material.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    NavigationComponent,
    AppComponent,
    EBayComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }