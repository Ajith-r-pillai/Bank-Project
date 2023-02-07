import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  currentuser=""
  currentaccountno=""
  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0,transation:[]},
    1001:{acno:1001,username:"binu",password:"abc123",balance:0,transation:[]},
    1002:{acno:1002,username:"jenu",password:"abc123",balance:0,transation:[]},
    1003:{acno:1003,username:"manu",password:"abc123",balance:0,transation:[]}
  }

  dataRegister(uname:any,acnum:any,paswd:any){
    if(acnum in this.userDetails){
      return false
    }
    else{
      this.userDetails[acnum]={acno:acnum,username:uname,password:paswd,balance:0}
      console.log(this.userDetails);
      return true
    }
  }

  UserLogin(acnum:any,paswd:any){
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(paswd==userDetails[acnum]["password"]){
        this.currentuser=userDetails[acnum]["username"]
        console.log(this.currentuser);
        this.currentaccountno=acnum
        return true
        }
        else{
          return false
        }
    }
    else{
      return false
    }
  }
  Userdeposite(acnum:any,password:any,amount:any){
    let userDetails=this.userDetails
    // convert string amount to number
    var amnt=parseInt(amount)

    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){
        userDetails[acnum]["balance"]+=amnt
        userDetails[acnum]["transation"].push({type:"cerdit",amount:amnt})
        return  userDetails[acnum]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }

  userWithdraw(acnum:any,password:any,amount:any){
    let userDetails=this.userDetails
    // convert string amount to number
    var amnt=parseInt(amount)
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"] ){
        if((userDetails[acnum]["balance"]>=amnt)){
          // update balance
        userDetails[acnum]["transation"].push({type:"debit",amount:amnt})
          userDetails[acnum]["balance"]-=amnt
          console.log(userDetails);
          

          return userDetails[acnum]["balance"]
        }
        else{
          alert("balance un avilable")
          return false
        }
       }
      else{
        alert("passwordd not correct")
        return false
  
      }
    }
    else{
      alert("not a user")
     return false
    }

  }
  getTransaction(acno:any){
    return this.userDetails[acno]["transation"]
  }
}
