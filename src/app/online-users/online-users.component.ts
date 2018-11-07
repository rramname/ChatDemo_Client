import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit {

  constructor() { }

    @Input()
    userName:string

  ngOnInit() {
  }

}
