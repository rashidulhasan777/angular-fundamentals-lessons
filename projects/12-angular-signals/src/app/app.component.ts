import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    @for (todo of todos(); track $index) {
      <input type="checkbox" [checked]="todo.completed" (change)="updateTodo(todo)" #el> <br>
    }

  `,
  styles: [],
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ])
  updateTodo(todo: Todo) {

    this.todos.update(todosPrev => {
      for (let index = 0; index < todosPrev.length; index++) {
        if (todosPrev[index].id === todo.id) {
          todosPrev[index].completed = !todosPrev[index].completed;
        }

      }
      return todosPrev;
    });
    console.log(this.todos());

  }
}
