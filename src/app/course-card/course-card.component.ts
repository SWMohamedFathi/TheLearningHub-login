import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  constructor(private routr:Router,public home:HomeService){}
@Input() course:any; 
@Output() Dana =new EventEmitter(); 

openProfile(){
  //this.routr.navigate(['profile']);
  this.home.selectedCourse={
    name:this.course.coursename, 
    price:this.course.price
  }
  this.Dana.emit();
}


}
