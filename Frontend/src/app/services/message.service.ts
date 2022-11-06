import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient,private httpParams:HttpParams) { }

  setMsgs(msg:any){
    
   return this.http.post('http://localhost:3030/api/message',msg)

  }

  query(server:any = ''){
    
    const params = new HttpParams().append('server',JSON.stringify(server))
    return this.http.get('http://localhost:3030/api/message',{params:params})
  }
}
