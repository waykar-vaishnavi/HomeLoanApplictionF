import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerEnquiryDetails } from '../Model/customer-enquiry-details';
import { EmployeeDetails } from '../Model/employee-details';
import { CustomerDetails } from '../Model/customer-details';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService { 
  // sendApprovedDocMail(email: CustomerDetails) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http : HttpClient) { }

  addcustomerenquiry(enq:CustomerEnquiryDetails)
  {
    return this.http.post("http://desktop-d80rbbt:8083/Add_customer_Enquiry",enq);
  }

  addEmployee(emp:FormData)
  {
    return this.http.post("http://desktop-d80rbbt:8082/Add_Employees",emp);
  }

  getEmployee()
  {
     return this.http.get("http://desktop-d80rbbt:8082/get_employee_details");
  }
  getCustomer()
  {
     return this.http.get("http://desktop-d80rbbt:8084/get_Customer");
  }
  getEnquries()
  {
    return this.http.get("http://desktop-d80rbbt:8083/getEnquiry");
  }
  addCustomer(customer:FormData)
  {
    return this.http.post("http://desktop-d80rbbt:8084/Add_Customer_Details",customer);
  }
  updateCustomerCibilScore(ceqd:CustomerEnquiryDetails)
  {
      return this.http.put("http://desktop-d80rbbt:8083/updatecibilscore/"+ceqd.customerEnquiryId,ceqd);
  }
  getapprovedCustomerenquries()
  {
    return this.http.get("http://desktop-d80rbbt:8083/getapprovedEnquries");
  }
  getrejectCustommerEnquiries()
  {
    return this.http.get("http://desktop-d80rbbt:8083/getrejectedEnquries");
  }
  updateCustomerDoc(cc:CustomerDetails)
  {
    return this.http.put("http://desktop-d80rbbt:8084/updateCustomer/"+cc.customerApplicationId,cc);
  }
  findonecustomer(id:number)
  {
    return this.http.get("http://desktop-d80rbbt:8084/getsingleCustomer/"+id);
  }
  ApprovedDocuments()
  {
    return this.http.get("http://desktop-d80rbbt:8084/getapprovedDocCustomer");
  }
  RejectedDocuments()
  {
    return this.http.get("http://desktop-d80rbbt:8084/getRejectedDocCustomer")
  }
  sendMail(mail:CustomerEnquiryDetails)
  {
     return this.http.post("http://desktop-d80rbbt:8083/sendmail",mail);
  }
  sendDocumentMail(email:CustomerDetails)
   {
    return this.http.post("http://desktop-d80rbbt:8084/senddocmail",email)
  }
}