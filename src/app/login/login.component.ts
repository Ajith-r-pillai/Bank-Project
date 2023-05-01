import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router:Router,private ds:ServiceService,private fb:FormBuilder){}
  ngOnInit(): void {
  
  }
  // reactive form
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
}
)

  

login(){
  var a=this.loginForm.value.acno
  var b=this.loginForm.value.psw
  // var result=this.ds.UserLogin(a,b)

  if(this.loginForm.valid){
    this.ds.UserLogin(a,b).subscribe((result:any)=>{
      localStorage.setItem("currentuser",JSON.stringify(result.currentuser))
      localStorage.setItem("currentacno",JSON.stringify(result.currentaccountno))
      localStorage.setItem("token",JSON.stringify(result. token))
   
      alert(result.message)
      this.router.navigateByUrl('dashboard')
    },
    result=>{
      alert(result.error.message)
    })
  // if(result){
  //   alert('login success')
  //   this.router.navigateByUrl('dashboard')
  // }
  // else{
  //   alert('incorrect account number or password')
  // }
}
else{
  alert("form not valid")
}
}

}