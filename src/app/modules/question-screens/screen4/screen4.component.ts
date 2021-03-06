import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../../shared/services/process-variables.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {

  public answers: string[] = [];
  public question4 = '';
  public nextStepButtonText = '';
  public currentIndex: number;
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private router: Router) { }

  ngOnInit(): void {
    this.question4 = this.processVariablesService.questions[3].question4;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.getIndexOfChosenAnswer();
    this.buildForm();
  }

  getPossibleAnswers(): void {
    this.processVariablesService.questions[3].answers.forEach(
      possibleAnswer => this.answers.push(possibleAnswer.answer)
    );
  }

  getIndexOfChosenAnswer(): void {
    this.answers.forEach(yesNoAnswer => {
      if (yesNoAnswer === this.processVariablesService.answers.question4) {
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
    return this.answerExists() ? this.processVariablesService.answers.question4 : null;
  }

  private answerExists(): boolean {
    return this.processVariablesService.answers.question4 !== null
      && this.processVariablesService.answers.question4 !== undefined;
  }

  public passIndexValue(index): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.processVariablesService.answers.question4 = this.questionnaireForm.value.yesNoAnswer;
    if (this.processVariablesService.answers.question1 === 'Kobieta') {
      this.router.navigate(['/question5']);
    } else {
      this.router.navigate(['/question7']);
    }
  }

  public goBack(): void {
    this.router.navigate(['/question3']);
  }

}
