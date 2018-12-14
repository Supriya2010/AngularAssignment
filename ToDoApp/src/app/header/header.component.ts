import { Component, OnInit, Output,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showToDo =new EventEmitter()
  @Output() showCat =new EventEmitter()

  constructor() {
   }

  ngOnInit() {
  }
onCatClick(){
  this.showCat.emit();
}
onToDoClick(){
this.showToDo.emit();
}
}
