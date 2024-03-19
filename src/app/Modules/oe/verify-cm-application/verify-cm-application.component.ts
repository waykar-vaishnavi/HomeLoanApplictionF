import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { Router } from '@angular/router';
import { CustomerDetails } from '../../../Model/customer-details';

@Component({
  selector: 'app-verify-cm-application',
  templateUrl: './verify-cm-application.component.html',
  styleUrl: './verify-cm-application.component.css'
})
export class VerifyCmApplicationComponent implements OnInit{
  constructor(private http:CommonserviceService,private router : Router){ }
  viewCustomer:CustomerDetails[];
  ngOnInit(): void {
    this.http.getCustomer().subscribe((data:CustomerDetails[])=>{
      this.viewCustomer = data;
    })
  }
}
