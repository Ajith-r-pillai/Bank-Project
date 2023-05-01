import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,private ds:ServiceService,private fb:FormBuilder){}

// create reactive form of register form
registerForm=this.fb.group(
  {
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
}
)
ngOnInit(): void {
  }
register(){
  var uname=this.registerForm.value.uname
  var acum=this.registerForm.value.acno
  var paswrd=this.registerForm.value.psw
 
  if(this.registerForm.valid){
    this.ds.dataRegister(uname,acum,paswrd).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('')
    },
    result=>{
      alert(result.error.message)
      this.router.navigateByUrl('')

   
    }
    
    )
    }

  // const result=this.ds. dataRegister(uname,acum,paswrd)
  // if(result){
//     alert('registered')
//     this.router.navigateByUrl('')
//   }else{
//     alert("account number already exist")
//   }
// }
else{
  alert("invalid form")
}
}
}

