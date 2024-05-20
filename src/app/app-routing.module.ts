import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailsComponent } from './components/details/details.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { SearchComponent } from './components/search/search.component';

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
      import('./modules/user-management/user-management.module').then(
        (m) => m.UserManagementModule,
      ),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./modules/album/album.module').then((m) => m.AlbumModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
