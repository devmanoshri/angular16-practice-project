import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';
  todos$ = of([] as Todo[]);
  todos = [] as Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
    this.todoService.getTodos().subscribe({
      next: (value: Todo[]) => {
        this.todos = value;
      },
      error: () => {},
    });
  }
}
