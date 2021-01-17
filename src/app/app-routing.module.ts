import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppStartComponent } from './modules/app-start/app-start.component';
import { Screen1Component } from './modules/question-screens/screen1/screen1.component';
import { Screen2Component } from './modules/question-screens/screen2/screen2.component';
import { Screen3Component } from './modules/question-screens/screen3/screen3.component';
import { Screen4Component } from './modules/question-screens/screen4/screen4.component';
import { Screen5Component } from './modules/question-screens/screen5/screen5.component';
import { Screen6Component } from './modules/question-screens/screen6/screen6.component';

const routes: Routes = [
  {path: '', component: AppStartComponent},
  {path: 'questionnaire', component: Screen1Component},
  {path: 'question2', component: Screen2Component},
  {path: 'question3', component: Screen3Component},
  {path: 'question4', component: Screen4Component},
  {path: 'question5', component: Screen5Component},
  {path: 'question6', component: Screen6Component},
  {path: '**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
