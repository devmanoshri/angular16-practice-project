import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoComponent } from './list-todo.component';

describe('ListTodoComponent', () => {
  let component: ListTodoComponent;
  let fixture: ComponentFixture<ListTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTodoComponent],
    });
    fixture = TestBed.createComponent(ListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
