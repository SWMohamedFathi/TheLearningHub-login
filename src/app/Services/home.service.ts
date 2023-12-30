import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message :string = 'This message from Home Service !!'; 
  numberOfActiveCourse :number=0; //
  selectedCourse : any ={};
  courses:any=[];
  constructor(private http :HttpClient , private toastr:ToastrService, private spinner:NgxSpinnerService) { }
  user:string ='dana@gmail.com'; 
  GetAllCourses(){
    this.http.get('https://localhost:5000/api/Course').subscribe((resp)=>{
      this.courses = resp;
      console.log(this.courses);
      
      this.numberOfActiveCourse=this.courses.length;
      console.log( this.numberOfActiveCourse);
      
      localStorage.setItem('username', this.user);
      localStorage.getItem('username');
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
      
     
    })
  }

  DeleteCourse(id:number){
      debugger;
      this.spinner.show(); 
    this.http.delete('https://localhost:5000/api/Course/delete/'+id).subscribe((resp)=>{
      this.toastr.success('Deleted'); 
      this.spinner.hide();
    },err=>{
      this.toastr.error('something want wrong !!'); 
      this.spinner.hide();
    })
  }

CreateCourse(body:any){
  debugger;
  this.spinner.show(); 
  body.imagename= this.display_image;
  this.http.post('https://localhost:5000/api/Course/',body).subscribe((resp)=>{
    this.toastr.success('Created'); 
    this.spinner.hide();
  }, err=>{
    this.toastr.error('something want wrong !!');
    this.spinner.hide();
  })

  //window.location.reload();
}


updateCourse(body:any){
  this.spinner.show();
  debugger;
  body.imagename=this.display_image
  this.http.put('https://localhost:5000/api/Course/',body).subscribe((resp)=>{
    this.toastr.success('Updated !!'); 
    this.spinner.hide();
  }, err=>{
    this.toastr.error('Error !!');
    this.spinner.hide();
  })
}
display_image :any ;
uploadAttachment(file : FormData){
  this.http.post('https://localhost:5000/api/Course/uploadImage',file)
  .subscribe((resp:any)=>{
  this.display_image = resp.imagename;
  },err=>{
    this.toastr.error('Error!!')
  })
}

cat_Courses :any =[]; 
GetAllCategoryCourse()
{
  this.http.get('https://localhost:5000/api/Course/GetAllCategoryCourse').subscribe((resp)=>{
    this.cat_Courses = resp; 
  }, err=>{
    this.toastr.error('Error'); 
  })
}

}
