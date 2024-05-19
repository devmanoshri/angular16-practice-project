import { Subscription } from 'rxjs';
import { UserManagementService } from '../../../services/user-management.service';
import { Component, Input } from '@angular/core';
import { Comments } from 'src/app/models/comments.model';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
})
export class UserCommentComponent {
  @Input() selectedPostId!: number;
  selectedPostsCommentList = [] as Comments[];
  subscription = new Subscription();
  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.userManagementService
      .getSelectedPostsCommentList(this.selectedPostId)
      .subscribe({
        next:(commentData:Comments[])=>{
          this.selectedPostsCommentList = commentData
        }
      });
  }
}
