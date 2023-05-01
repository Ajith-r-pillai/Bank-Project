import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit{

@Input() item:String | undefined

// even creation
 @Output() oncancel=new EventEmitter()

 @Output() onDelete=new EventEmitter()

 constructor(){}
  ngOnInit(): void {
   
  }
  onCancel(){
    // start event
    this.oncancel.emit()

  }
  deleteAcc(){
  this.onDelete.emit(this.item)
  }

}
