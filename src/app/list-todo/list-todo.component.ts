import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  // todos$ = of([] as Todo[]);
  // todos = [] as Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todos$ = this.todoService.getTodos();
    // this.todoService.getTodos().subscribe({
    //   next: (value: Todo[]) => {
    //     this.todos = value;
    //   },
    //   error: () => { },
    // })
  }
}
