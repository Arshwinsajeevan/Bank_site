import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno1: any
  pswd1: any
  amnt1: any

  accno2: any
  pswd2: any
  amnt2: any

  acno: any

  dateandtime: any

  user: any

  constructor(private ds: DataService, private router: Router) {

    this.dateandtime = new Date()

    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('currentUser') || '')

    }
    // access username

  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      alert('Login first')
      this.router.navigateByUrl('')
    }
  }

  deposit() {
    var accno1 = this.accno1
    var pswd1 = this.pswd1
    var amnt1 = this.amnt1

    this.ds.deposit(accno1, pswd1, amnt1).subscribe((result: any) => {
      alert(`${amnt1}  is credited in your account and available balance is ${result.message}`)
    },
      result => {
        alert(result.error.message)
      })

  }

  withdraw() {
    var accno2 = this.accno2
    var pswd2 = this.pswd2
    var amnt2 = this.amnt2

    this.ds.withdraw(accno2, pswd2, amnt2).subscribe((result: any) => {
      alert(`${amnt2} is debited from your account and available balance is ${result.message}`)
    },
      result => {
        alert(result.error.message)
      })

  }

  logout() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }

  delete() {
    this.acno = JSON.parse(localStorage.getItem('currentAcno') || "")
  }

  oncancel() {
    this.acno = ""
  }

  ondelete(event:any){

    this.ds.deleteacc(event).subscribe((result:any)=>{
      alert(result.message)
      this.logout()
    },
    result=>{
      alert(result.error.message)
    })
    // alert(event)
  }

}
