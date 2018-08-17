import { Component } from '@angular/core';
import { ChatBusService } from './chat-bus.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private chatBus:ChatBusService){

  }
  ngOnInit(){
    
  }

  Connect(){
    this.chatBus.connect();
    this.connected=true;
    this.chatBus.getMessage().subscribe((msg)=>this.msgs.push(msg));
  }
  sendMessage(){
    this.chatBus.sendMessage(this.name +" : "+this.msg)
    this.msg="";
  }
  getMessage(){
    
  }
  socket:any;
  name:string="";
  msg:string="";
  msgs=[];
  connected:boolean=false;
}
