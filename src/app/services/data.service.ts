import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any
  currentacno:any

  // redendent data
  userDetails: any = {
    1000: { acno: 1000, username: "Arshi", password: "1000", balance: 0 ,transaction:[] },
    1001: { acno: 1001, username: "Abhi", password: "1001", balance: 0 ,transaction:[] },
    1002: { acno: 1002, username: "Sachi", password: "1002", balance: 0 ,transaction:[] },
    1003: { acno: 1003, username: "Arya", password: "1003", balance: 0 ,transaction:[] }
  }

  constructor() {
    this.getData()
   }

  saveData(){
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentUser',JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentacno))
    }
  }

  getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentUser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentUser') || '')
    }
    if(localStorage.getItem('currentAcno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentAcno') || '')
    }
  }

  register(acno: any, username: any, password: any) {

    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0 ,transaction:[] }

     this.saveData()

      return true
    }
  }

  // --------------------------------------------------------------

  login(accno: any, psw: any) {

    var userDetails=this.userDetails

    this.currentuser=userDetails[accno]['username']
    

    if (accno in userDetails) {
      if (psw == userDetails[accno]['password']) {
        this.currentacno=accno
        this.saveData()
        return true
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('User not exist')
      return false
    }
  }

  // ---------------------------------------------------------------

  deposit(accno1: any, pswd1: any, amnt1: any) {
    // to convert string to integer
    var amount = parseInt(amnt1)
    let userDetails = this.userDetails
    if (accno1 in userDetails) {
      if (pswd1 == userDetails[accno1]['password']) {
        userDetails[accno1]['balance'] += amount

        // add deposit details in transaction array
        userDetails[accno1]['transaction'].push({type:'CREDIT',amount})
        this.saveData()
        return userDetails[accno1]['balance']
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('Incorrect username')
      return false
    }
  }

  // ----------------------------------------------------------------

  withdraw(accno1: any, pswd1: any, amnt1: any) {
    const userDetails = this.userDetails
    var amount = parseInt(amnt1)
    if (accno1 in userDetails) {
      if (pswd1 == userDetails[accno1]['password']) {
        if ( amount<=userDetails[accno1]['balance']) {
          userDetails[accno1]['balance'] -= amount
          userDetails[accno1]['transaction'].push({type:'DEBIT',amount})
          this.saveData()
          return userDetails[accno1]['balance']
        }
        else{
          alert('Insufficient balance')
          return false
        }
      }
      else{
        alert('Incorrect password')
        return false
      }
    }
    else{
      alert('Incorrect username')
      return false
    }
  }

  getTransaction(accno:any){
    return this.userDetails[accno]['transaction']
  }

}

