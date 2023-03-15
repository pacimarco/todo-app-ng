import { Component, Input } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  toggleCompleted(): void {
    this.todoService.toggleCompleted(this.todo.id);
  }

  deleteTodo(): void {
    this.todoService.deleteTodoById(this.todo.id);
  }
}
