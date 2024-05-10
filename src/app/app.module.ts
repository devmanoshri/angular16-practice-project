import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCheckComponent } from './todo-check/todo-check.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user-management/user/user.component';
import { PostComponent } from './user-management/post/post.component';
import { UserCommentComponent } from './user-management/user-comment/user-comment.component';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    DetailsComponent,
    TodoCheckComponent,
    BasicFormComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    UserCommentComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
