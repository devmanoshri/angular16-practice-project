import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Comments } from '../models/comments.model';
import { CommentsService } from './../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnDestroy {
  commentForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required],
  });

  commentsList = [] as Comments[];
  newData = {} as Comment;
  subscription = new Subscription();

  constructor(
    private commentService: CommentsService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const subs = this.commentService.getComments().subscribe({
      next: (commentData: Comments[]) => {
        this.commentsList = commentData;
      },
      error: () => {},
    });
    this.subscription.add(subs);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    const dataToPost = {
      postId: 3,
      name: this.commentForm.value.name || '',
      email: this.commentForm.value.email || '',
      body: this.commentForm.value.comment || '',
    };
    this.subscription.add(
      this.commentService.postComments(dataToPost).subscribe({
        next: (postedData: Comments) => {
          this.commentsList = [postedData, ...this.commentsList];
          this.commentForm.reset();
        },
      }),
    );
  }
}
