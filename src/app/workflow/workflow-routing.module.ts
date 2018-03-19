import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { WorkflowComponent } from './workflow.component';

// const routes: Routes = [];

const routes: Routes = [
  Route.withShell([
    { path: 'workflow', component: WorkflowComponent, data: { title: extract('Workflow') } }
  ])
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
