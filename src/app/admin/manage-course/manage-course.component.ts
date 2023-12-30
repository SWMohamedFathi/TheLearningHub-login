import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  @ViewChild  ('callDeleteDailog')callDelete!:TemplateRef<any>
  @ViewChild ('callUpdateDialog') callUpdateDialog !:TemplateRef<any>
  _filterText :string ='';

  constructor(public home:HomeService,public dialog: MatDialog){}
  numberOfCourses:number | undefined; 
  ngOnInit(): void {
   this.home.GetAllCourses();
   this.home.GetAllCategoryCourse();
  

   
  }

  DeleteCourse(id:number){
    const dialogRef= this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result=='1'){
        debugger;
        this.home.DeleteCourse(id);
      }
  
    else {
      console.log('Thank you ');
    }
    })
   
  }

  OpenCreateDialog(){
    this.dialog.open(CreateCourseComponent)
  }
  updateForm:FormGroup = new FormGroup({
    courseid :new FormControl(),//645
     coursename:new FormControl('',Validators.required), //ts
     price:new FormControl('',Validators.required), //100
     startDate:new FormControl('',Validators.required), //
     endDate:new FormControl('',Validators.required), //
     imagename:new FormControl()
  })
  

pData:any ; 
  openUpdateDailog(obj:any){
    this.pData = obj; 
    console.log(this.pData);

    this.updateForm.controls['courseid'].setValue(this.pData.courseid);
    this.home.display_image= this.pData.imagename;
    this.dialog.open(this.callUpdateDialog);
  }
  UpdateCourse(){
    debugger;
    this.home.updateCourse(this.updateForm.value);
  }
  uploadImage(file:any){
    if(file.length==0) return ; 
  let fileToUlpoad =<File> file[0] ; 
  const formData = new FormData(); 
  formData.append('file', fileToUlpoad,fileToUlpoad.name);
  this.home.uploadAttachment(formData);
  
  }
}
