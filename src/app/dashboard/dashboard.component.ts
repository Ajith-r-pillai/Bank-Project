import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user=''

  acno:any
  psw:any
  amnt:any

   acno1:any
   psw1:any
   amnt1:any



  constructor(private ds:ServiceService){
  this.user=this.ds.currentuser
  }
  ngOnInit(): void {
   
  }
  deposite(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.Userdeposite(acno,psw,amnt)
    if(result){
      alert(`youre account has been creadited with amount ${amnt}. and the balance is ${result}`)
    }
    else{
      alert("incurrent acno and password")
    }

  }

  withdraw(){
    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1
    const result=this.ds.userWithdraw(acno1,psw1,amnt1)
  
    if(result){
      alert(`youre account has been debited with amount ${amnt1}. and the balance is ${result}`)
    }
    else{
      alert("incurrent acno and password")
    }

    

  }

}


