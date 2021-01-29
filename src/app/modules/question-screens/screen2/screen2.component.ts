import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ProcessVariablesService } from 'src/app/shared/services/process-variables.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  public years: number[] = [];
  public question2 = '';
  private selectedYear: string;
  public selectedCountry = 2020;

  constructor(private datePipe: DatePipe,
              private processVariablesService: ProcessVariablesService,
              private router: Router) { }

  ngOnInit(): void {
    this.generateYears();
    this.question2 = this.processVariablesService.questions[1].question2;
  }


  private generateYears(): void {
    const currentYear: number = parseInt(this.datePipe.transform(new Date(), 'yyyy'), 2);
    let year: number = currentYear;
    for (let i = currentYear; i >= 1930; i--) {
      this.years.push(year);
      year--;
    }
  }

  selectedValue(event: MatSelectChange): void {
    console.log(event.value);
    this.selectedYear = event.value;
  }

  submitForm(): void {
    this.processVariablesService.answers.question2 = this.selectedYear;
    this.router.navigate(['/question3']);
  }

}
