import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-example',
  templateUrl: './shadow-dom-example.component.html',
  styleUrls: ['./shadow-dom-example.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomExampleComponent {

}
