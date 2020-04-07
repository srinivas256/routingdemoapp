import { Component } from '@angular/core';

@Component({
template: `<h1>{{title}}</h1>
  <a routerLink='child2'>Child Two</a>
  <router-outlet></router-outlet>
  `
})
export class PageTwoComponent {
  title = 'Page Two Component';
}