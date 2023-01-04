import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item:String|undefined

  // event creation 
  // EventEmitter

  @Output() onCancel=new EventEmitter()

  @Output() onDelete=new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

  delete(){
    this.onDelete.emit(this.item)
  }

}
