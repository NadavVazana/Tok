import { UserService } from './../../services/user.service';
import { MessageService } from './../../services/message.service';
import { SocketService } from './../../services/socket.service';
import { ServerService } from './../../services/server.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import '../../services/socket.service.js'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private serverService: ServerService,
    private socketService: SocketService,
    private messageService: MessageService,
    private userService:UserService) { }

   @ViewChild('scroll') scroll!:ElementRef
  server!: any
  message!: string
  messages: any[] = []

  ngAfterViewInit(){
    

  }
  async ngOnInit() {
    
    // this.scroll.nativeElement.scrollTop = 0
    

    await this.route.params.subscribe(data => {
      this.serverService.getServerById(data['id']).subscribe(data => {
        this.server = data
        if (this.server){
          this.socketService.emit('join-server', this.server._id)
        this.messageService.query(this.server).subscribe((messages: any) => {
          let filtered = messages.filter((msg: any) => msg.server._id === this.server._id)
          this.messages = filtered
        })}})})




    this.socketService.listen('server-message').subscribe((message: any) => {
      if ( message.server._id === this.server._id) {
        let msg = ''
        msg += message.msg
        
        this.messages.push({ msg, sentAt: message.sentAt,user:message.user })
      }})



    this.messageService.query().subscribe((msgs: any) => {
      this.messages = msgs
})}

getLoggedInUser(){
  return this.userService.getLoggedInUser().username
  
}




  sendMessage() {
    if (!this.message) return
    console.log(this.scroll.nativeElement.scrollHeight );
    
    const date = new Date()
    const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    var msgToSend = { msg: this.message, server: this.server, sentAt: `${hours}:${mins}` ,user:this.userService.getLoggedInUser()}
    this.socketService.emit('send-message', msgToSend)
    this.messageService.setMsgs(msgToSend).subscribe(msg => {
    })
    this.message = ''
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
    
  }}
