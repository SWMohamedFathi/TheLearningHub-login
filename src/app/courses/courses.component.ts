import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(public home:HomeService,private router:Router){}
  ngOnInit(): void {
    this.home.GetAllCourses(); 
  }
showProfile(){
  this.router.navigate(['profile']);
}
}
