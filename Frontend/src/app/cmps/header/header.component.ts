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
  isError:boolean = false
  isModal:boolean = false
  ngOnInit(): void {

    const user:User = JSON.parse(localStorage.getItem('loggedInUser') || '')    
    if(user){
      this.loggedInUser = user

     
    }
    
  }

  onSignOut(){
    this.userService.logout().subscribe(msg=>{
        this.loggedInUser = null
        localStorage.clear()
      
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
    
    this.userService.login(this.user).subscribe(user=>{
      this.isError = false
      this.isModal = false
      
      localStorage.setItem('loggedInUser',JSON.stringify(user))
      this.loggedInUser = user as User
    },
    error =>{ this.isError = true
    })

  }

}
