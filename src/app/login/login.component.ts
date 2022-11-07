import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // demo='Your Perfect Banking Partner'  // string interpollation  {{}}
  // data='Enter account number'          //property binding [property]="value"

  acno:any
  pswd:any

  userDetails:any={
    1000:{acno:1000,username:"Arshi",password:"1000",balance:0},
    1001:{acno:1001,username:"Abhi",password:"1001",balance:0},
    1002:{acno:1002,username:"Sachi",password:"1002",balance:0},
    1003:{acno:1003,username:"Arya",password:"1003",balance:0}
  }

  constructor() { }

  ngOnInit(): void {
  }

  // login(){
  //   alert("Login clicked")               //event binding     (event name) = "methodname()"
  // }

  // login(){
  //   var acno=this.acno      //short form
  //   var pswd=this.pswd

  //   if(acno in this.userDetails){
  //     if(pswd==this.userDetails[acno]['password']){
  //         alert('Login success')
  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
  //   }
  //   else{
  //     alert('User not exist')
  //   }

  // }

  login(a:any,b:any){
    var acno=a.value     //short form
    var pswd=b.value

    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
          alert('Login success')
      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('User not exist')
    }

  }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(event.target.value)
    
  // }

  // pswdChange(event:any){
  //    this.pswd=event.target.value
  //   //  console.log(event.target.value);
  // }

}
