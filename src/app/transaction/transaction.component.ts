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
  this.transactionData=this.ds.getTransaction(this.ds.currentaccountno)


}


  ngOnInit(): void {
   
  }

}
