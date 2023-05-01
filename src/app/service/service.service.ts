import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// over loading heder as global
const option={
  headers: new HttpHeaders()


}
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  currentuser: any
  currentaccountno: any
  constructor(private http:HttpClient) {
    // this.getData()

  }

  userDetails: any
//  userDetails:any={
//     1000:{acno:1000,username:"anu",password:"abc123",balance:0,transation:[]},
//     1001:{acno:1001,username:"binu",password:"abc123",balance:0,transation:[]},
//     1002:{acno:1002,username:"jenu",password:"abc123",balance:0,transation:[]},
//     1003:{acno:1003,username:"manu",password:"abc123",balance:0,transation:[]}
//   }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails))
    }
    if (this.currentuser) {
      localStorage.setItem("currentuser", this.currentuser)
    }
    if (this.currentaccountno) {
      localStorage.setItem("currentaccountno", JSON.stringify(this.currentaccountno))
    }
  }

  // getData() {
  //   if (localStorage.getItem('database')) {
  //     this.userDetails = JSON.parse(localStorage.getItem('database') || "")
  //   }
  //   if (localStorage.getItem('currentuser')) {
  //     this.currentuser = localStorage.getItem('currentuser')
  //   }
  //   if (localStorage.getItem('currentAcno')) {
  //     this.currentaccountno = JSON.parse(localStorage.getItem('currentaccountno') || "")
  //   }
  // }
       getToken(){
        const token=JSON.parse(localStorage.getItem("token") || "")
        let headers= new HttpHeaders()
        if(token){
      option.headers= headers.append("access_key",token)
        }
        return option
       }


   dataRegister(uname: any, acnum: any, paswd: any) {
    const data={uname,acnum,paswd}
    return this.http.post("http://localhost:3000/register",data)
    
    
    // if (acnum in this.userDetails) {
    //   return false
    // }
    // else {
    //   this.userDetails[acnum] = { acno: acnum, username: uname, password: paswd, balance: 0, transation: [] }
    //   // console.log(this.userDetails);
    //   this.saveData()
    //   return true
    // }
  }

  UserLogin(acnum: any, paswd: any) {

    const data={acnum,paswd} 
    return this.http.post("http://localhost:3000/login",data)

    // var userDetails = this.userDetails
    // if (acnum in userDetails) {
    //   if (paswd == userDetails[acnum]["password"]) {
    //     this.currentuser = userDetails[acnum]["username"]
    //     // console.log(this.currentuser);
    //     this.currentaccountno = acnum
    //     this.saveData()
    //     return true
    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }
  }
  Userdeposite(acnum: any, password: any, amount: any) {
      const data={acnum,password,amount}

      return this.http.post('http://localhost:3000/deposite',data,this.getToken())
    // let userDetails = this.userDetails
    // // convert string amount to number
    // var amnt = parseInt(amount)

    // if (acnum in userDetails) {

    //   if (password == userDetails[acnum]["password"]) {
    //     userDetails[acnum]["balance"] += amnt
    //     userDetails[acnum]["transation"].push({type: "cerdit", amount: amnt })
    //     this.saveData()
    //     return userDetails[acnum]["balance"]
    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }

  }

  userWithdraw(acnum: any, password: any, amount: any) {
    const data={acnum,password,amount}

    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())





    // let userDetails = this.userDetails
    // // convert string amount to number
    // var amnt = parseInt(amount)
    // if (acnum in userDetails) {
    //   if (password == userDetails[acnum]["password"]) {
    //     if ((userDetails[acnum]["balance"] >= amnt)) {
    //       // update balance
    //       userDetails[acnum]["transation"].push({ type: "debit", amount: amnt })
    //       userDetails[acnum]["balance"] -= amnt
    //       console.log(userDetails);
    //       this.saveData()
    //       return userDetails[acnum]["balance"]
    //     }
    //     else {
    //       alert("balance un avilable")
    //       return false
    //     }
    //   }
    //   else {
    //     alert("passwordd not correct")
    //     return false

    //   }
    // }
    // else {
    //   alert("not a user")
    //   return false
    // }
  }
  getTransaction(acno: any) {
      const data={acno}

    return this.http.post('http://localhost:3000/transaction',data,this.getToken())

  }

  deleteacc(acno:any){
    return this.http.delete('http://localhost:3000/transaction/'+acno,this.getToken())
  }
  
}
