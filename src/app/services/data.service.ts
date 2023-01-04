import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


// global overloading headers

const option ={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

 

  constructor(private http: HttpClient) {
    // this.getData()
  }

  gettoken() {
    const token = JSON.parse(localStorage.getItem('token') || '')
    let headers = new HttpHeaders()
    if(token){
      option.headers=headers.append('access-token',token)
    }
    return option
  }

  // -------------------------------------------------------------

  register(acno: any, username: any, password: any) {

    const data = {
      acno, username, password
    }
    return this.http.post('http://localhost:3000/register', data)

  }

  // --------------------------------------------------------------

  login(acno: any, psw: any) {

    const data = {
      acno, psw
    }
    return this.http.post('http://localhost:3000/login', data)

  }

  // ---------------------------------------------------------------

  deposit(accno1: any, pswd1: any, amnt1: any) {
    const data = {
      acno: accno1, psw: pswd1, amount: amnt1
    }
    return this.http.post('http://localhost:3000/deposit', data, this.gettoken())
  }

  // ----------------------------------------------------------------

  withdraw(accno1: any, pswd1: any, amnt1: any) {
    const data = {
      acno: accno1, psw: pswd1, amount: amnt1
    }
    return this.http.post('http://localhost:3000/withdraw', data, this.gettoken())
  }

  // ------------------------------------------------------------------

  getTransaction(accno: any) {
    const data = {
      acno:accno
    }
    return this.http.post('http://localhost:3000/transaction', data, this.gettoken())
  }

  // ------------------------------------------------------------------

  deleteacc(accno:any){
    return this.http.delete('http://localhost:3000/deleteacc/'+accno , this.gettoken())
  }

}

