import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SubmitComponent } from './submit.component';

const routes: Routes = [
  Route.withShell([
    { path: 'submit', component: SubmitComponent, data: { title: extract('Submit') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitRoutingModule { }
