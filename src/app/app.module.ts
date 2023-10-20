import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { NestedFormGroupExampleComponent } from './nested-form-group-example/nested-form-group-example.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { TemplateReferenceVariableExampleComponent } from './template-reference-variable-example/template-reference-variable-example.component';
import { ShadowDomExampleComponent } from './shadow-dom-example/shadow-dom-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlExampleComponent,
    FormGroupExampleComponent,
    NestedFormGroupExampleComponent,
    FormArrayExampleComponent,
    TemplateReferenceVariableExampleComponent,
    ShadowDomExampleComponent,
    FormBuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
