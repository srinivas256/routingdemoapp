import { Component } from '@angular/core';

@Component({
  template: `<h1>{{title}}</h1>
  <a routerLink='child1'>Child One</a>
  <router-outlet></router-outlet>
  `
})
export class PageOneComponent {
  title = 'Page One Component';
}