import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todoItems: TodoModel[] = [
    {title: 'Angular'},
    {title: 'JS/TS'},
    {title: 'React'},
  ];
  constructor() { }

  addTodo(title: string){
    this.todoItems.push({title});
  }
  removeTodo(todoItemIndex: number){
    this.todoItems.splice(todoItemIndex,1)
  }
}
