import {Component, Input, OnInit} from '@angular/core';
// Works:
// import {Name} from '../types';
// Does not work:
import {Name} from '../../../shared';

@Component({
  selector: 'app-root',
  template: `
    <h1>hi {{name.givenName}}!</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() name: Name; // @Input() cause error
  // Works:
  // name: Name;

  ngOnInit(): void {
    this.name = {
      givenName: 'Doe',
    }
  }
}
