import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../../../Serives/commonservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private http: CommonserviceService) { }
  addemployeeform: FormGroup;
  prof:any;
  image1:any;
  reader = new FileReader;
  ngOnInit(): void {
    this.addemployeeform = this.fb.group(
      {
        employeeId:[],
        employeeName:[],
        employeeEmail:[],
        employeeContactNo:[],
        emplyeeDesignation:[],
        employeeProfileImage:[],
      }
    )
  }
  onSubmit()
   {
    alert('Employee Data Added Successfully');
    let EmployeeDetailsjson:string = JSON.stringify(this.addemployeeform.value);
    const formData = new FormData();
    formData.append('employees',EmployeeDetailsjson);
    formData.append('profile',this.prof);
    this.http.addEmployee(formData).subscribe();
  }
  onselectProfile(event:any)
  {
     this.prof=event.target.files[0];
     this.reader.onload = e =>
     this.image1=this.reader.result;
     this.reader.readAsDataURL(this.prof);
  }
}
