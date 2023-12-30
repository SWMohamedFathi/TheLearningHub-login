import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient ,
     private toastr:ToastrService, private spinner:NgxSpinnerService,private router:Router) { }
  body:any; 
  Login(username:any, password:any){
    this.body={
      username : username.value.toString(), 
      password :password.value.toString()
    }
    const headerDir ={
      'Content-Type':'application/json', 
      'Accept':'application/json'
    }
    const requestOptions={
      headers: new HttpHeaders(headerDir)
    }


    //show spinner
    this.spinner.show(); 
    //hits API 
    this.http.post('https://localhost:5000/api/JWT/',this.body,requestOptions).subscribe((resp:any)=>{
      console.log(resp);
      const responce ={
        token : resp.toString()
      }
      localStorage.setItem('token',responce.token );
      let data :any = jwtDecode(responce.token);//object 
      localStorage.setItem('user',JSON.stringify(data))
      if(data.roleid=='1') 
      {
          this.router.navigate(['admin/dashboard'])
      }

      else 
      this.router.navigate(['courses']);
      this.toastr.success('Welcome');
      this.spinner.hide();
    },err=>{
      this.toastr.error('Error');
      this.spinner.hide();
    })





  }




}
