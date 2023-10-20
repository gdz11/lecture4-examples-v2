import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.scss']
})
export class FormArrayExampleComponent {

  announcementForm = new FormGroup({
    title: new FormControl<string | null>(null),
    skills: new FormArray([
        new FormControl<string | null>(null)
    ])
  });

  get skills(){
    return this.announcementForm.controls['skills'];
  }

  onAddSkill(){
    this.skills.push(new FormControl<string | null>(null));
  }

  onRemoveSkill(index: number){
    this.skills.removeAt(index);
  }



}
