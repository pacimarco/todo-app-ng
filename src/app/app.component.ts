import { Component } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(title: string): void {
    if (title.trim().length === 0) {
      return;
    }
    this.todoService.addTodo(title);
    this.todos = this.todoService.getTodos();
  }


  deleteTodoById(id: number): void {
    this.todoService.deleteTodoById(id);
    this.todos = this.todoService.getTodos();
  }

  toggleCompleted(id: number): void {
    this.todoService.toggleCompleted(id);
    this.todos = this.todoService.getTodos();
  }
}
