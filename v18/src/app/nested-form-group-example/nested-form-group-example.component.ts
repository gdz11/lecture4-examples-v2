import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group-example',
  imports: [ReactiveFormsModule, JsonPipe],
  standalone: true,
  templateUrl: './nested-form-group-example.component.html',
  styleUrls: ['./nested-form-group-example.component.scss']
})
export class NestedFormGroupExampleComponent {

  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('Tbilisi'),
      street: new FormControl('')
    })
  });

  changeCity(){
    this.registrationForm.patchValue({
      address: {
        city: 'Batumi'
      }
    });
  }
}
