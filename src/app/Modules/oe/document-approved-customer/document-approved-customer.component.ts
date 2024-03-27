import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { CustomerDetails } from '../../../Model/customer-details';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-document-approved-customer',
  templateUrl: './document-approved-customer.component.html',
  styleUrl: './document-approved-customer.component.css'
})
export class DocumentApprovedCustomerComponent implements OnInit {
  constructor(private http:CommonserviceService){ }
  viewAprovedCustomer:CustomerDetails[];
  addCustomerForm: FormGroup;
  ngOnInit(): void {
    this.http.getapprovedCustomerenquries().subscribe((data:CustomerDetails[])=>{
      this.viewAprovedCustomer = data;
    });
  }
}
