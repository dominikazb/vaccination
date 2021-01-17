import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { AppStartComponent } from './modules/app-start/app-start.component';
import { MaterialModule } from './shared/modules/material.module';
import { ElevationDirective } from './shared/directives/elevation.directive';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { Screen1Component } from './modules/question-screens/screen1/screen1.component';
import { Screen2Component } from './modules/question-screens/screen2/screen2.component';
import { Screen3Component } from './modules/question-screens/screen3/screen3.component';
import { Screen4Component } from './modules/question-screens/screen4/screen4.component';
import { Screen5Component } from './modules/question-screens/screen5/screen5.component';
import { Screen6Component } from './modules/question-screens/screen6/screen6.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppStartComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ElevationDirective,
    HighlightDirective,
    Screen1Component, 
    Screen2Component, 
    Screen3Component,
    Screen4Component, 
    Screen5Component, 
    Screen6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
