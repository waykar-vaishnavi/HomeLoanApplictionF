import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyCmApplicationComponent } from './verify-cm-application/verify-cm-application.component';

const routes: Routes = [
  {
    path:'verify_bycm_application',component:VerifyCmApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OERoutingModule { }
