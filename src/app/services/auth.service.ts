import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { SingleResponseModel } from '../models/singleresponse';
import { TokenModel } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private httpclient:HttpClient) { }
  login(loginModel:Login){
    return this.httpclient.post<TokenModel>
    (this.apiUrl+"auth/login",loginModel)
  }
  
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
