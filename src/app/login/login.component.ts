import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  login(){
    var acno=this.acno      //short form
    var pswd=this.pswd

    const result=this.ds.login(acno,pswd)
    if (result){
      alert('Login Success')
      this.router.navigateByUrl('dashboard')
    }
   

}
}

  
