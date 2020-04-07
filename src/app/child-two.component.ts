import { Component } from '@angular/core';

@Component({
  template: `<h1>{{title}}</h1>
  <a routerLink='./home'>home</a>
  <router-outlet></router-outlet>
  `
})
export class ChildTwoComponent {
  title = 'Child Two Component';
}