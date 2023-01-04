import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  useracno:any
  transaction:any

  constructor(private ds:DataService) {

      this.useracno=JSON.parse(localStorage.getItem('currentAcno') || "")

      this.ds.getTransaction(this.useracno).subscribe((result:any)=>{
        this.transaction=result.message
      },
      (result:any)=>{
        alert(result.error.message)
      })

      
   }

  ngOnInit(): void {
  }

}
