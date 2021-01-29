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
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProcessVariablesService } from './shared/services/process-variables.service';
import { QuestionScreensModule } from './modules/question-screens/question-screens.module';


@NgModule({
  declarations: [
    AppStartComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    QuestionScreensModule
  ],
  providers: [DatePipe, ProcessVariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
