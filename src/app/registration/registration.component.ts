import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  uname=''
  acnum=''
  paswrd=''
  constructor(private router:Router,private ds:ServiceService){}
  
  ngOnInit(): void {

  }

register(){
  var uname=this.uname
  var acum=this.acnum
  var paswrd=this.paswrd

  const result=this.ds. dataRegister(uname,acum,paswrd)
  if(result){
    alert('registered')
    this.router.navigateByUrl('')
  }else{
    alert("account number already exist")
  }
}

}
