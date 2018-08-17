import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBusService {

  constructor() {

   }
   connect(){
    this.socket = socketIo("https://rrnodechatserver.herokuapp.com",{
      transports: ['websocket'],
      withCredentials:false
    });
    
   }

    sendMessage(msg){
      this.socket.emit("new-message",msg)
    }

    getMessage(){
      this.socket.withCredentials=false;
      return new Observable(observer=>{
        this.socket.on("new-message",(data:string)=>{
          console.log(data);
          observer.next(data)
        })
      }) 
    }

    public onEvent(event: Event): Observable<any> {
      return new Observable<Event>(observer => {
          this.socket.on(event, () => observer.next());
      });
  }

   socket:any;
   name:string="";

}
