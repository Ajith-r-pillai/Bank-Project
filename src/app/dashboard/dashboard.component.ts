import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user:any
  acno:any
  datedetails:any
constructor(private ds:ServiceService,private fb:FormBuilder,private router:Router){
  if(localStorage.getItem("currentuser")){
  this.user=JSON.parse(localStorage.getItem("currentuser")|| " ")

  }

  this.datedetails=new Date()
  }
 depositeForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
})
withdrwForm=this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw2:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
  amnt3:['',[Validators.required,Validators.pattern('[0-9]+')]]
})


  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("please login")
      this.router.navigateByUrl('')
    }

   
  }
  deposite(){
    var acno=this.depositeForm.value.acno
    var psw=this.depositeForm.value.psw
    var amnt=this.depositeForm.value.amnt
    if(this.depositeForm.valid){
    this.ds.Userdeposite(acno,psw,amnt).subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    })
 
    // if(result){
    //   alert(`youre account has been creadited with amount ${amnt}. and the balance is ${result}`)
    // }
    // else{
    //   alert("incurrent acno and password")
    // }
  } else{
    alert("form not valid")
  }

  }

  withdraw(){
    var acno1=this.withdrwForm.value.acno1
    var psw1=this.withdrwForm.value.psw2
    var amnt1=this.withdrwForm.value.amnt3
    if(this.withdrwForm.valid){
    this.ds.userWithdraw(acno1,psw1,amnt1).subscribe((result:any)=>{
      alert(result.message)
    }, 
    result=>{
      alert(result.error.message)
    })
  
    // if(result){
    //   alert(`youre account has been debited with amount ${amnt1}. and the balance is ${result}`)
    // }
    // else{
    //   alert("incurrent acno and password")
    // }
  }
  else{
    alert("not valid")
  }
    }
    logout(){
      localStorage.removeItem("currentaccountno")
      localStorage.removeItem("currentuser")
      localStorage.removeItem("token")
      this.router.navigateByUrl('')
    }

    deleteParent(){
      this.acno=JSON.parse(localStorage.getItem("currentacno") || " ")
    }
    cancel(){
      this.acno=''
    }
   Delete(event:any){
    // alert(event)
    this.ds.deleteacc(event).subscribe((result:any)=>{
      alert(result.message)
    this.logout()
    })
   }    

}


