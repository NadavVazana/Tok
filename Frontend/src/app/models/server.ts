import { Member } from './member';
export interface Server {
    _id:string
    name:string
    members:Member[]
    imgPath:string
}
