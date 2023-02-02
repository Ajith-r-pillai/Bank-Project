import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user=''

  constructor(private ds:ServiceService){
  this.user=this.ds.currentuser
  }
  ngOnInit(): void {
   
  }
}


