import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProcessVariablesService} from 'src/app/shared/services/process-variables.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Screen1Component implements OnInit {

  public genders: string[] = [];
  public question1 = '';
  public nextStepButtonText = '';
  public currentIndex: number;
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private router: Router) { }

  ngOnInit(): void {
    this.question1 = this.processVariablesService.questions[0].question1;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.getIndexOfChosenAnswer();
    this.buildForm();
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      gender: new FormControl(this.processVariablesService.answers.question1, Validators.required)
    });
  }

  getPossibleAnswers(): void {
    this.processVariablesService.questions[0].answers.forEach(
      possibleAnswer => this.genders.push(possibleAnswer.answer)
    );
  }

  getIndexOfChosenAnswer(): void {
    this.genders.forEach(gender => {
      if (gender === this.processVariablesService.answers.question1) {
        this.currentIndex = this.genders.indexOf(gender);
      }
    });
  }

  passIndexValue(index): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.processVariablesService.answers.question1 = this.questionnaireForm.value.gender;
    this.router.navigate(['/question2']);
  }

}
