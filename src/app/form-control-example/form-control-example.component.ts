import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.scss']
})
export class FormControlExampleComponent {

  name = new FormControl('john');
  lastName = new FormControl('reese')

  changeValue(){
    this.name.setValue('harold');
    this.lastName.setValue('finch');
  }

  getValue(){
    console.log(this.name.value + ' ' + this.lastName);
    alert(this.name.value + ' ' + this.lastName.value);
  }

  constructor(){

  }

}
