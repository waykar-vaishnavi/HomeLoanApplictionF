import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyCmApplicationComponent } from './verify-cm-application/verify-cm-application.component';
import { VerifyDocumentsComponent } from './verify-documents/verify-documents.component';
import { DocumentApprovedCustomerComponent } from './document-approved-customer/document-approved-customer.component';
import { DocumentRejectCustomerComponent } from './document-reject-customer/document-reject-customer.component';

const routes: Routes = [
  {
    path:'verify_bycm_application',component:VerifyCmApplicationComponent
  },
  {
    path:'edit/:verifyDocuments',component:VerifyDocumentsComponent
  },
  {
    path:'aprrovedDoc',component:DocumentApprovedCustomerComponent
  },
  {
    path:'rejectedDoc',component:DocumentRejectCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OERoutingModule { }
