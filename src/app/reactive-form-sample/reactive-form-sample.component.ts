import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.css']
})
export class ReactiveFormSampleComponent implements OnInit {
  contactForm!: FormGroup;
  contactFormUntyped!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl<string>(''),
      email: new FormControl(''),
      message: new FormControl(''),
      number: new FormControl()
    });
    this.contactFormUntyped = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
      number: new FormControl()
    });
  }

  Submit() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.value.email?.length); //check the null value
    console.log(this.contactForm.value.email!.length); //If you are sure value is not null
    console.log(this.contactFormUntyped.value.name.length); // throw error in browser
  }
}
