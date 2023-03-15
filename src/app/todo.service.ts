import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, title: 'Esempio di attività 1', completed: false },
    { id: 2, title: 'Esempio di attività 2', completed: true }
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  deleteTodoById(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompleted(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
