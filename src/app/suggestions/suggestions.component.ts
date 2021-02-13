import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-suggestions',
  template: `<h1>Hello from Suggestions</h1>
  <h2>Hello again from suggestions</h2>
  `,
  styles: [`
  h1{
    color:red;
  }
  `]
})
export class SuggestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
