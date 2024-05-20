import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-check',
  templateUrl: './todo-check.component.html',
  styleUrls: ['./todo-check.component.scss'],
})
export class TodoCheckComponent {
  @Input() todoList: Todo[] = [];
}
