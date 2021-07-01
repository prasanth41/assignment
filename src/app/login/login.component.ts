import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usersArray = [
    {
      email: "testuser1@gmail.com",
      password: '123456'
    },
    {
      email: "testuser2@gmail.com",
      password: '123456'
    },
    {
      email: "testuser3@gmail.com",
      password: '123456'
    }
  ];

  public loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { 
    sessionStorage.clear()
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['testuser1@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    });
  }

  loginOnClick(){
    console.log(this.loginForm.value);
    const tempFlag = this.usersArray.find(x => x.email === this.loginForm.value.email);
    if(tempFlag){
      if(tempFlag.password === this.loginForm.value.password){
        sessionStorage.setItem('isLogin', 'true');
        this.router.navigate(['search'])
      }else{
        alert('INVALID CREDENTIALS')
      }
    }else{
      alert('USER NOT FOUND')
    }
  }

}
