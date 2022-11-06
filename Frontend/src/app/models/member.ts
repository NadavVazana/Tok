import { Server } from './server';
export interface Member {
    _id:string
    name:string
    servers:Server[]
}
