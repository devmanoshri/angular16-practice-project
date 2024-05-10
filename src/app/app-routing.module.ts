import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailsComponent } from './details/details.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';
import { UserComponent } from './user-management/user/user.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddTodoComponent,
  },
  {
    path: 'dashboard',
    component: ListTodoComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'form',
    component: BasicFormComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/details/:id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
