import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable-example',
  templateUrl: './template-reference-variable-example.component.html',
  styleUrls: ['./template-reference-variable-example.component.scss']
})
export class TemplateReferenceVariableExampleComponent {

  getData(value: string){
    alert("name: " + value);
  }
}
