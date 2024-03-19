import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../Serives/commonservice.service';
import { EmployeeDetails } from '../../../Model/employee-details';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{
constructor(private http : CommonserviceService) { }
viewemployeeData:EmployeeDetails[];
ngOnInit(): void {
  this.http.getEmployee().subscribe((data:EmployeeDetails[])=>
  {
    this.viewemployeeData=data;
  })
}
}
