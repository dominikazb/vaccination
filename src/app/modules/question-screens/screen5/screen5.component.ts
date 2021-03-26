import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../../shared/services/process-variables.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.css']
})
export class Screen5Component implements OnInit {

  public answers: string[] = [];
  public question5 = '';
  public nextStepButtonText = '';
  public currentIndex: number;
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private router: Router) { }

  ngOnInit(): void {
    this.question5 = this.processVariablesService.questions[4].question5;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.getIndexOfChosenAnswer();
    this.buildForm();
  }

  getPossibleAnswers(): void {
    this.processVariablesService.questions[4].answers.forEach(
      possibleAnswer => this.answers.push(possibleAnswer.answer)
    );
  }

  getIndexOfChosenAnswer(): void {
    this.answers.forEach(yesNoAnswer => {
      if (yesNoAnswer === this.processVariablesService.answers.question5) {
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
    return this.answerExists() ? this.processVariablesService.answers.question5 : null;
  }

  private answerExists(): boolean {
    return this.processVariablesService.answers.question5 !== null
      && this.processVariablesService.answers.question5 !== undefined;
  }

  public passIndexValue(index): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.processVariablesService.answers.question5 = this.questionnaireForm.value.yesNoAnswer;
    if (this.processVariablesService.answers.question5 === 'Nie' && this.processVariablesService.answers.question1 === 'Kobieta') {
      this.router.navigate(['/question6']);
    } else {
      this.router.navigate(['/question7']);
    }
  }

  public goBack(): void {
    this.router.navigate(['/question4']);
  }

}
