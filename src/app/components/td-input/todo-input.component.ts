import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-td-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todoTitle: string = '';
  @Output() todoTitleSubmit = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }
  submitTodo(){
    if(this.todoTitle.trim())
    this.todoTitleSubmit.emit(this.todoTitle)
    this.todoTitle = ''
  }
}
