import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../../shared/services/process-variables.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

  public answers: string[] = [];
  public question3 = '';
  public nextStepButtonText = '';
  public currentIndex: number;
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private router: Router) { }

  ngOnInit(): void {
    this.question3 = this.processVariablesService.questions[2].question3;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.getIndexOfChosenAnswer();
    this.buildForm();
  }

  getPossibleAnswers(): void {
    this.processVariablesService.questions[2].answers.forEach(
      possibleAnswer => this.answers.push(possibleAnswer.answer)
    );
  }

  getIndexOfChosenAnswer(): void {
    this.answers.forEach(yesNoAnswer => {
      if (yesNoAnswer === this.processVariablesService.answers.question3) {
        this.currentIndex = this.answers.indexOf(yesNoAnswer);
      }
    });
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.defaultValue(), Validators.required)
    });
  }

  private defaultValue(): string {
    return this.answerExists() ? this.processVariablesService.answers.question3 : null;
  }

  private answerExists(): boolean {
    return this.processVariablesService.answers.question3 !== null
      && this.processVariablesService.answers.question3 !== undefined;
  }

  public passIndexValue(index): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.processVariablesService.answers.question3 = this.questionnaireForm.value.yesNoAnswer;
    if (this.processVariablesService.answers.question3 === 'Tak') {
      this.router.navigate(['/question4']);
    } else {
      this.router.navigate(['/question5']);
    }
  }

  public goBack(): void {
    this.router.navigate(['/question2']);
  }

}
