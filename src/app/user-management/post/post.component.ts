import { Subscription } from 'rxjs';
import { Post } from './../../models/post.model';
import { UserManagementService } from './../../services/user-management.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input()  selectedUserId!: number;

  selectedUserPostList = [] as Post[];
  subscription = new Subscription();


  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {

    this.subscription.add(
      this.userManagementService.getSelectedUsersPost(this.selectedUserId).subscribe({
        next: (userPost: Post[]) => {
          this.selectedUserPostList = userPost;
        },
      }),
    );
  }
}
