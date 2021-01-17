import { Component, OnInit } from '@angular/core';
import { ProcessVariablesService } from 'src/app/shared/services/process-variables.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {

  public question1: string = '';
  public answer1: string = '';
  public answer2: string = '';
  public disabledNextBtn: boolean = true;
  public nextStepButtonText: string = '';

  constructor(private processVariablesService: ProcessVariablesService) {
  }

  ngOnInit(): void {
    this.question1 = this.processVariablesService.questions[0].question1;
    this.answer1 = this.processVariablesService.questions[0].answers[0].answer1;
    this.answer2 = this.processVariablesService.questions[0].answers[0].answer2;
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
  }

  public getAnswer1() {
    this.disabledNextBtn = false;
    this.processVariablesService.answers.question1 = this.answer1;
  }

  public getAnswer2() {
    this.disabledNextBtn = false;
    this.processVariablesService.answers.question1 = this.answer2;
  }
}

