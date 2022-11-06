import { SocketService } from './services/socket.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ServerListComponent } from './cmps/server-list/server-list.component';
import { ChatComponent } from './cmps/chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerListComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  
  ],
  providers: [   HttpParams,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
