import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';

const routes: Routes = [
  {
    path:'verify_aoolication',component:VerifyApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMRoutingModule { }
