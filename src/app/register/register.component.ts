import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno:any
  uname:any
  psw:any

  constructor(private ds:DataService , private login:Router) {}

  ngOnInit(): void {
  }

  register(){
    var acno=this.acno
    var uname=this.uname
    var psw=this.psw

    const result=this.ds.register(acno,uname,psw)

    if(result){
      alert("Succesfully Registered")
      this.login.navigateByUrl('')
      
    }
    else{
      alert("User already exist")
    }
  }

}
