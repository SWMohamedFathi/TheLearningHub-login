import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( courses: any[],filterText:string) {
    
    if(filterText==''){
      return courses; 
    }
    else return courses.filter((item)=>{
      return item.coursename.toLowerCase() == filterText.toLowerCase();
    })

  }

}
