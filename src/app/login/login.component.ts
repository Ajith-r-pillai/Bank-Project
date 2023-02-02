import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=""
  paswd=" "
constructor(private router:Router,private ds:ServiceService){}

ngOnInit(): void {
  
}
login(){
  var a=this.acno
  var b=this.paswd
  var result=this.ds.UserLogin(a,b)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert('incorrect account number or password')
  }
}
}