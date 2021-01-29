import { Component, OnInit } from '@angular/core';
import { ProcessVariablesService } from 'src/app/shared/services/process-variables.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {

  public genders = ['Kobieta', 'Mężczyzna'];
  public question1 = '';
  public answer1 = '';
  public answer2 = '';
  public nextStepButtonText = '';
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private router: Router) { }

  ngOnInit(): void {
    this.question1 = this.processVariablesService.questions[0].question1;
    this.answer1 = this.processVariablesService.questions[0].answers[0].answer1;
    this.answer2 = this.processVariablesService.questions[0].answers[0].answer2;
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      gender: new FormControl(null, Validators.required)
    });
  }

  public onSubmit(): void {
   console.log('answer1: ' + this.questionnaireForm.value.gender);
   this.router.navigate(['/question2']);
  }
}

