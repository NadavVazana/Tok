import { MessageService } from './../../services/message.service';
import { ServerService } from './../../services/server.service';
import { Server } from './../../models/server';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {


  constructor(private serverService:ServerService,private messageService:MessageService) { }
  servers!:any
  currentServer!:Server 
  async ngOnInit() {
     (await this.serverService.getServers()).subscribe(data=> {this.servers = data}
     
     )
  }

  onSelectServer(server:Server){
    this.messageService.query().subscribe(msgs=>{
    })
    
    

  }
  

  

}
