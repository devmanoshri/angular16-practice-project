import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    component: ListTodoComponent,
  },

  {
    path: 'form',
    component: BasicFormComponent,
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
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./modules/country/country.module').then((m) => m.CountryModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
