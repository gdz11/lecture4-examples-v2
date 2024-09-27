import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  imports: [ReactiveFormsModule, JsonPipe],
  standalone: true,
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.scss']
})
export class FormGroupExampleComponent {
  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  changeData(){
    this.registrationForm.setValue({
      name: 'test',
      email: 'test@example.com'
    });
  }

  changeName(){
    this.registrationForm.patchValue({
      name: 'test2'
    });
  }
}
