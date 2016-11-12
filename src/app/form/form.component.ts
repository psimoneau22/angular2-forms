import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/Employee';
import { FormService } from '../services/form.service';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'test-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class TestForm implements OnInit {

  languages: string[];
  model = new Employee("Phil", 'Simoneau');
  
  constructor(private formService: FormService) { }  

  ngOnInit() { 
    this.formService.getLanguages()
      .subscribe(l => this.languages = l)
  }

  get languageInvalid(): boolean {
    return this.model.language === "default";
  } 

  submitForm(form: NgForm, event: Event){

    if(this.languageInvalid) return;

    this.formService.submitForm(this.model)
      .subscribe(r => {
        console.log(r);
      });

      //event.preventDefault();
  }

  firstNameToUpper(name: string) {
    if(name.length > 0) {
      this.model.firstName = name.charAt(0).toUpperCase() + name.slice(1);

    }
    else {
      this.model.firstName = name;
    }
  }
}
