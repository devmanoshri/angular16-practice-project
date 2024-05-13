import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailsComponent } from './details/details.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { SearchComponent } from './search/search.component';

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
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-management/user-management.module').then(
        (m) => m.UserManagementModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
