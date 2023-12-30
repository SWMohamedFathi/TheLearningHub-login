import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  constructor(public home:HomeService,private http :HttpClient , private toastr:ToastrService, private spinner:NgxSpinnerService){}
createCourse:FormGroup= new FormGroup({
  coursename:new FormControl('',Validators.required), 
  price:new FormControl('',Validators.required), 
  startDate:new FormControl('',Validators.required), 
  endDate:new FormControl('',Validators.required), 
  imagename:new FormControl()
})
Save(){
  debugger;
this.home.CreateCourse(this.createCourse.value)
}
_filterText:string = ''; 
uploadImage(file:any){
  if(file.length==0) return ; 
let fileToUlpoad =<File> file[0] ; 
const formData = new FormData(); 
formData.append('file', fileToUlpoad,fileToUlpoad.name);
this.home.uploadAttachment(formData);
}


}
