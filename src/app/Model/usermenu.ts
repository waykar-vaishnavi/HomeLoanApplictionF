export class Usermenu
{
    public static menus:Array<any>=[
        {
            admin:[
                    {lable:'App Stastics',link:'stastics'},
                    {lable:'Add Employee',link:'add_employee'},
                    {lable:'Update Employee',link:'update_employee'},
                    {lable:'Remove Employee',link:'delete_employee'},
                    {lable:'View Employee',link:'view_Employee'},
                    {lable:'View Customer',link:'view_Customer'},
                  ],
               re:[
                    {lable:'View Enquiries',link:'view_enquiry'},
                    {lable:'Register New Enquiry',link:'register_neEnquiry'},
                    {lable:'Cibil Approved',link:'cibil_approved'},
                    {lable:'Cibil Rejected',link:'cibil_rejected'},
                    {lable:'View Application Status',link:'viewApp_status'},
                    {lable:'Registration Form',link:'RegisterForm'},
                  ],
               ah:[
                    {lable:'View Approved Sanc.Letter',link:'view_sanction_letter'},
                  ],
               oe:[
                    {lable:'Verify Application',link:'verify_bycm_application'},
                  ],
               cm:[
                    {lable:'View Verified Application',link:'verify_application'},
                  ],
         customer:[
                    {lable:'Profile',link:'customer_profile'},
                    {lable:'Loan Details',link:'customer_loan_details'},
                    {lable:'Application Status',link:'customer_application_status'}
                  ]
        }
    ]
}
