import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Server } from './../models/server';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  servers:Server[]= [{_id:'s101',name:'Games',members:[],imgPath:'../../../assets/imgs/games-server.svg'},
  {_id:'s102',name:'News',members:[],imgPath:'../../../assets/imgs/news-server.svg'},
  {_id:'s103',name:'General',members:[],imgPath:'../../../assets/imgs/general-server.svg'}]

  constructor(private http:HttpClient,private httpParams:HttpParams) { }
  BASE_API:string = 'http://localhost:3030/api/server/'
  async getServers(){
    return this.http.get(this.BASE_API)
  }

  getServerById(serverId:string){
    const params = new HttpParams().append('id',serverId)
    return this.http.get('http://localhost:3030/api/server/id',{params:params})
  }



}
