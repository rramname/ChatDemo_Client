import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBusService {

  constructor() {

   }
   connect(name){
     
    
     console.log(this.connectedUsers);
     this.socket = socketIo("wss://rrnodechatserver.herokuapp.com/",{
       withCredentials:false
      });
          this.socket.emit("new-connection",name);
    }

  //   this.socket = socketIo("http://localhost:3000",{
  //       withCredentials:false
  //     });
  //     this.socket.emit("new-connection",name);
  //  }

    sendMessage(msg){
      this.socket.emit("new-message",msg)
    }

    getMessage(){
      this.socket.withCredentials=false;
      return new Observable(observer=>{
        this.socket.on("new-message",(data:string)=>{
          
          observer.next(data)
        })
      }) 
    }

    onNewUser(){
      return new Observable(observer=>{
        this.socket.on("new-connection-success",(data:any)=>{
         // observer.next(data)
         console.log(data);
          this.connectedUsers=data
        })
      })
    }

    onUserDisconnect(){
      return new Observable(observer=>{
        this.socket.on("user-disconnected",(data:any)=>{
          this.connectedUsers=data
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
   connectedUsers=[];

}
