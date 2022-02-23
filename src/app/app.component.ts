import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {TodoStorageService} from "./servise/todo-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-app';
  todoItems: TodoModel[] = []
  //   [
  //   {title: 'Angular'},
  //   {title: 'Angular2222222'},
  //   {title: 'Angular11111'},
  // ];
  constructor(private todoStorage: TodoStorageService) {}
  ngOnInit() {
    this.todoItems = this.todoStorage.todoItems
  }

  addTodo(title: string){
    // this.todoItems.push({title});
    this.todoStorage.addTodo(title)
  }
  removeTodo(index: number){
    this.todoStorage.removeTodo(index)
  }
}
