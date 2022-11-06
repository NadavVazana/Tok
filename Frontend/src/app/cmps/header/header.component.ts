import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:User = {username:'',password:''} as User
  loggedInUser!:User | null
  isModal:boolean = false
  ngOnInit(): void {

    const user:User = JSON.parse(localStorage.getItem('loggedInUser') || '{}')    
    console.log(user);
    if(user){
      this.loggedInUser = user

     
    }
    
  }

  onSignOut(){
    this.userService.logout().subscribe(msg=>{
        this.loggedInUser = null
      
    })
  }

  onSignup(){
    this.userService.signup(this.user).subscribe(user=>{
      this.loggedInUser = user as User
      localStorage.setItem('loggedInUser',JSON.stringify(user))
    })
    this.isModal = false
    
  }

  onLogin(){
    this.isModal = false
    this.userService.login(this.user).subscribe(user=>{
      localStorage.setItem('loggedInUser',JSON.stringify(user))
      this.loggedInUser = user as User
    })

  }

}
