import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todoItems: TodoModel[] = [
    {title: 'Angular'},
    {title: 'Angular2222222'},
    {title: 'Angular11111'},
  ];
  constructor() { }

  addTodo(title: string){
    this.todoItems.push({title});
  }
  removeTodo(todoItemIndex: number){
    this.todoItems.splice(todoItemIndex,1)
  }
}
