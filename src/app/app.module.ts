import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailsComponent } from './components/details/details.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { SearchComponent } from './components/search/search.component';
import { TodoCheckComponent } from './components/todo-check/todo-check.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { SharedModule } from './modules/shared/shared.module';

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
    ReactiveFormsModule,
    CommonModule,
    SharedModule
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
