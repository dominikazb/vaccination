import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Screen6Component } from './screen6/screen6.component';
import {MaterialModule} from '../../shared/modules/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { Screen7Component } from './screen7/screen7.component';
import { Screen8Component } from './screen8/screen8.component';
import { Screen9Component } from './screen9/screen9.component';
import { Screen10Component } from './screen10/screen10.component';
import { Screen11Component } from './screen11/screen11.component';
import { Screen12Component } from './screen12/screen12.component';

@NgModule({
  declarations: [
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen7Component,
    Screen8Component,
    Screen9Component,
    Screen10Component,
    Screen11Component,
    Screen12Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class QuestionScreensModule { }
