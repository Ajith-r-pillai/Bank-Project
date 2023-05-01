import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit  {

  transactionData:any


constructor(private ds:ServiceService){

 this.ds.getTransaction(JSON.parse(localStorage.getItem("currentacno") || ""))
 .subscribe((result:any)=>{
  this.transactionData=result.transaction

 })


}


  ngOnInit(): void {
   
  }

}
