import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title = '';

  constructor(private todoService: TodoService) {}

  addTodo(): void {
    if (this.title.trim()) {
      this.todoService.addTodo(this.title.trim());
      this.title = '';
    }
  }
}
