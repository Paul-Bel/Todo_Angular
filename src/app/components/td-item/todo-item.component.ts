import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from "../../models/todo-model";

@Component({
  selector: 'app-td-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: TodoModel = {title: ''}
  @Output() removeTodo = new EventEmitter<void>()

  onDeleteTodo() {
    this.removeTodo.emit()
  }

}
