import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerEnquiryDetails } from '../Model/customer-enquiry-details';
import { EmployeeDetails } from '../Model/employee-details';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http : HttpClient) { }

  addcustomerenquiry(enq:CustomerEnquiryDetails)
  {
    return this.http.post("http://desktop-d80rbbt:8081/Add_customer_Enquiry",enq);
  }

  addEmployee(emp:FormData)
  {
    return this.http.post("http://desktop-d80rbbt:8081/Add_Employees",emp);
  }

  getEmployee()
  {
     return this.http.get("http://desktop-d80rbbt:8081/get_Employee");
  }
  getCustomer()
  {
     return this.http.get("http://desktop-d80rbbt:8081/get_customer");
  }
  getEnquries()
  {
    return this.http.get("http://desktop-d80rbbt:8081/get_Enquiries");
  }
  addCustomer(customer:FormData)
  {
    return this.http.post("http://desktop-d80rbbt:8081/Add_Customer_Details",customer);
  }
  updateCustomerCibilScore(ceqd:CustomerEnquiryDetails)
  {
      return this.http.put("http://desktop-d80rbbt:8081/updatecibilscore/"+ceqd.customerEnquiryId,ceqd);
  }
  getapprovedCustomerenquries()
  {
    return this.http.get("http://desktop-d80rbbt:8081/getapprovedEnquries");
  }
  getrejectCustommerEnquiries()
  {
    return this.http.get("http://desktop-d80rbbt:8081/getrejectedEnquries");
  }
}
