import { Component } from '@angular/core';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { NestedFormGroupExampleComponent } from './nested-form-group-example/nested-form-group-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { TemplateReferenceVariableExampleComponent } from './template-reference-variable-example/template-reference-variable-example.component';
import { ShadowDomExampleComponent } from './shadow-dom-example/shadow-dom-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormControlExampleComponent, FormGroupExampleComponent, NestedFormGroupExampleComponent, FormArrayExampleComponent, FormBuilderExampleComponent, TemplateReferenceVariableExampleComponent, ShadowDomExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lecture4-examples';
}
