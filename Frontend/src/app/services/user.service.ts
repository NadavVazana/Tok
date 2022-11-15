import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getLoggedInUser(){
    return JSON.parse(localStorage.getItem('loggedInUser') || '')
  }

  login(user:User){
    
    return this.http.post('http://localhost:3030/api/auth/login',user)
  }

  signup(user:User){
    
    return this.http.post('http://localhost:3030/api/auth/signup',user)
      
      
    
  }

  logout(){
    
    return this.http.post('http://localhost:3030/api/auth/logout','')

  }
}
