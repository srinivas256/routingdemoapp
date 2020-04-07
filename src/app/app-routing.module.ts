import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildOneComponent} from './child-one.component';
import {ChildTwoComponent} from './child-two.component';
import {PageOneComponent} from './page-one.component';
import {PageTwoComponent} from './page-two.component';
import {ChildTwoNestedComponent} from './child-two-nested.component';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
{ path:'', redirectTo:'/page1', pathMatch:'full'},
  {path: 'page1', component:PageOneComponent,
 children:[{
   path:'child1', component:ChildOneComponent
 }]
},
{ path: 'page2', component:PageTwoComponent,
children:[{
  path:'child2', component:ChildTwoComponent,
  children:[
    {path:'child2Nested', component:ChildTwoNestedComponent },
    {
      path:'home', component:HomeComponent
    }
]
}]},
{path:'**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
