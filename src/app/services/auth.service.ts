import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authentication_state = new BehaviorSubject(localStorage.getItem("login")?true:false)

  constructor() { }

  login(){
    // this.http.post("url",{
    //   usuario:"",
    //   password:""
    // }).subscribe(token=>{
    //   localStorage.setItem("token",token.toString())
    // })
    this.authentication_state.next(true)
    localStorage.setItem("login", "true")
  }
  logout(){
    this.authentication_state.next(false)
    localStorage.removeItem("login")
  }
  isLogin(){
    return this.authentication_state
  }
  isLoginValue(){
    return this.authentication_state.value
  }
}
