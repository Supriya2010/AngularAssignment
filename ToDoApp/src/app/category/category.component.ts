import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  tasks = [
      {
        name: 'Angular Session One',
        category: 'CDAC',
        status: true
      },
      {
          name: 'Angular Session Two',
          category: 'CDAC',
          status: false
      },
      {
          name: 'Angular Session Three',
          category: 'CDAC',
          status: false
      }
  ]

  listPage = true;
  formPage = false;
  

  constructor() { }

  ngOnInit() {
  }

  showNewToDoForm(){
    this.listPage = false;
    this.formPage = true;
  }

  onToDoAdded(toDo) {
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
  }

   showToDoForm(){
     this.listPage = false;
     this.formPage = false;
     
  
    }

}
