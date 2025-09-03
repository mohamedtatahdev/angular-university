import { Injectable } from '@angular/core';
import {IsigninForm} from '../interfaces/Iuser';

const API_AUTH = 'https://hippo-api.ld-web.net/api/login_check';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async signin(signinForm: IsigninForm): Promise<IsigninForm>{
    const response = await fetch(API_AUTH, {
      method: 'POST',
      body: JSON.stringify(signinForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json();
    if(response.ok){
      localStorage.setItem("token", body.token)
      console.log(body.token)
      return body.token ;

    } else {
      throw new Error(body)
    }

  }

  getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  isAuthenticated(){
    const isAuth = this.getToken() !== null;
    return isAuth;
  }

  logout() {
    localStorage.removeItem("token");
  }

}
