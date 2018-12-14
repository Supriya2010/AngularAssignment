import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() editToDoButtonClicked = new EventEmitter<{
    name: String,
    category: String,
    status: Boolean
  }>();
  name: string = "";
  category: string = "";
  status: boolean =false;

  constructor() { }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }

  onEditButtonClick(){
    this.editToDoButtonClicked.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

}
