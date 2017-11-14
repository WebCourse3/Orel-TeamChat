import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [Globals]
})
export class ChatPageComponent implements OnInit {

  username: string = "";

  constructor(globals: Globals) {
    username = globals.username;
  }

  ngOnInit() {
  }

}
