import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  allowShowDetails = false;
  todoDetails = 'No data available!';
  todoName = '';

  userName = '';
  resetButtonStatus = 'false';

  todo$ = of({} as Todo);

  constructor(private todoService: TodoService) {
    setTimeout(() => {
      this.allowShowDetails = true;
    }, 2000);
  }
  ngOnInit(): void {
    this.todo$ = this.todoService.getTodoDetails();
  }

  onShowDetails() {
    this.todoDetails = 'You have enter this:' + this.todoName;
  }

  onUpdateServerName(event: Event) {
    this.todoName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName.length > 3) {
      console.log(this.userName.length);
      this.resetButtonStatus = 'true';
    }
  }
}
