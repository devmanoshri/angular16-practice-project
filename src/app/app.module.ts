import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailsComponent } from './details/details.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { SearchComponent } from './search/search.component';
import { TodoCheckComponent } from './todo-check/todo-check.component';

@NgModule({
  declarations: [
    AddTodoComponent,
    AppComponent,
    BasicFormComponent,
    CommentsComponent,
    DetailsComponent,
    ListTodoComponent,
    SearchComponent,
    TodoCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
