import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OERoutingModule } from './oe-routing.module';
import { VerifyCmApplicationComponent } from './verify-cm-application/verify-cm-application.component';


@NgModule({
  declarations: [
    VerifyCmApplicationComponent
  ],
  imports: [
    CommonModule,
    OERoutingModule
  ]
})
export class OEModule { }
