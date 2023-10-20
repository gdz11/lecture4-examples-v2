import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
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
