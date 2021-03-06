import {DatePipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ProcessVariablesService} from 'src/app/shared/services/process-variables.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  public years: number[] = [];
  public question2 = '';
  public questionnaireForm: FormGroup;
  public checked = true;

  constructor(private processVariablesService: ProcessVariablesService,
              private datePipe: DatePipe,
              private router: Router) { }

  ngOnInit(): void {
    this.question2 = this.processVariablesService.questions[1].question2;
    this.generateYears();
    this.buildForm();
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yearOfBirth: new FormControl(this.processVariablesService.answers.question2, Validators.required)
    });
  }

  private generateYears(): void {
    const currentYear: number = parseInt(this.datePipe.transform(new Date(), 'yyyy'), 10);
    let year: number = currentYear;
    for (let i = currentYear; i >= 1930; i--) {
      this.years.push(year);
      year--;
    }
  }

  onSubmit(): void {
    this.processVariablesService.answers.question2 = this.questionnaireForm.value.yearOfBirth;
    this.router.navigate(['/question3']);
  }

  goBack(): void {
    this.router.navigate(['/questionnaire']);
  }
}
