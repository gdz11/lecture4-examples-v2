import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.scss']
})
export class FormBuilderExampleComponent {

  registrationForm = this.fb.group({
    name: [''],
    email: [''],
    address: this.fb.group({
      city: ['Tbilisi'],
      street: ['']
    })
  });

  changeCity(){
    this.registrationForm.patchValue({
      address: {
        city: 'Batumi'
      }
    });
  }

  constructor(private fb: FormBuilder){
    
  }
}
