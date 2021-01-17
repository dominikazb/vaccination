import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ProcessVariablesService } from 'src/app/shared/services/process-variables.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  public years: number[] = [];
  public question2: string = '';
  private selectedYear: string; 


  constructor(private datePipe: DatePipe,
              private processVariablesService: ProcessVariablesService) { }

  ngOnInit() {
    this.generateYears();
    this.question2 = this.processVariablesService.questions[1].question2;
  }

 
  private generateYears() {
    const currentYear: number = parseInt(this.datePipe.transform(new Date(), 'yyyy'));
    let year: number = currentYear;
    for (var i = currentYear; i >= 1930; i--) {
      this.years.push(year);
      year--;
    }    
  }

  selectedCountry: number = 2020;

  selectedValue(event: MatSelectChange) {
    console.log(event.value);
    this.selectedYear = event.value;
  }

  submitForm() {
    this.processVariablesService.answers.question2 = this.selectedYear;
  }

}
