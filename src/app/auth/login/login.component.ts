import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  activeCourse:number=0;
  constructor(public home:HomeService,private auth:AuthService){  }

  username : FormControl = new FormControl('ex@example.com',Validators.required);
  password: FormControl = new FormControl('******',Validators.required);
  submit(){
    this.auth.Login(this.username, this.password)
  }
}
