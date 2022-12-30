import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  // acno:any
  // pswd:any

  constructor(private router: Router, private ds: DataService, private formbuilder: FormBuilder) { }

  // create register form model

  loginForm = this.formbuilder.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  ngOnInit(): void {
  }

  login() {
    var acno = this.loginForm.value.acno    //short form
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {
      const result = this.ds.login(acno, psw)
      if (result) {
        alert('Login Success')
        this.router.navigateByUrl('dashboard')
      }

    }
    else{
      alert('Invalid Form')
    }
  }
}


