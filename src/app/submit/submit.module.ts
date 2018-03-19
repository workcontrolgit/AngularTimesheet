import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitRoutingModule } from './submit-routing.module';
import { SubmitComponent } from './submit.component';

@NgModule({
  imports: [
    CommonModule,
    SubmitRoutingModule
  ],
  declarations: [SubmitComponent]
})
export class SubmitModule { }
