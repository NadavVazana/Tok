import { Server } from './../models/server';
import { ServerService } from './../services/server.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerResolver {
  server!:any
  constructor(private serverService:ServerService){}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    return await  this.serverService.getServerById(route.params['id'])

    
      

    
    
    
  }
}
