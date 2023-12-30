import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { UpdateComponent } from './manageCourse/update/update.component';

const routes: Routes = [{
  path:'dashboard', 
  component:DashboardComponent
}, {
  path:'manageCourse', 
  component:ManageCourseComponent
},{
  path:'update', 
  component:UpdateComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
