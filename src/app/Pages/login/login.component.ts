import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variable de Clase
  title = "Login" 
  modificado = false
  myLogin:FormGroup

  constructor(private fl:FormBuilder, private authService: AuthService) {
    this.myLogin = this.fl.group({
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(3), Validators.maxLength(8)]]  
    })
  }
  
  login(){
    console.log(this.myLogin.value)
    this.authService.login()
  }

  cambiarTitle(){
    this.title = "Login Angular"
    this.modificado = true
  }
  
  ngOnInit(): void {
  }

}
