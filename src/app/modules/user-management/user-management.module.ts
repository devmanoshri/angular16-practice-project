import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostComponent,
    UserCommentComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserManagementRoutingModule,
    SharedModule,
  ],
})
export class UserManagementModule {}
