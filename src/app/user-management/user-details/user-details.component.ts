import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  catchError,
  combineLatest,
  delay,
  of,
  retry,
  Subscription,
  take,
} from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { UserManagementService } from './../../services/user-management.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnDestroy {
  userId = 0;
  userDetails = {} as User;
  postList = [] as Post[];
  albumList = [] as Album[];
  subscription = new Subscription();
  keys = Object.keys;
  showLoader = false;
  hasError = false;
  constructor(
    private userManagementService: UserManagementService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = +(params.get('id') || '');
      if (this.userId) {
        this.fetchUserAllDetails();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchUserAllDetails() {
    this.showLoader = true;
    this.hasError = false;
    combineLatest([
      this.userManagementService.getUserDetails(this.userId),
      this.userManagementService.getSelectedUsersPost(this.userId),
      this.userManagementService.getSelectedUsersAlbum(this.userId).pipe(
        retry(2),
        catchError(() => {
          return of([] as Album[]);
        }),
      ),
    ])
      .pipe(delay(600))
      .subscribe({
        next: ([userData, postData, albumData]) => {
          this.userDetails = userData;
          this.postList = postData;
          this.albumList = albumData;
          this.showLoader = false;
        },
        error: () => {
          this.hasError = true;
          this.showLoader = false;
        },
      });
  }
  // fetchUserDetails() {
  //   this.showLoader = true;
  //   this.subscription.add(
  //     this.userManagementService.getUserDetails(this.userId).subscribe({
  //       next: (userData: User) => {
  //         this.userDetails = userData;
  //       },
  //     }),
  //   );

  //   this.subscription.add(
  //     this.userManagementService.getSelectedUsersPost(this.userId).subscribe({
  //       next: (postData: Post[]) => {
  //         this.postList = postData;
  //       },
  //     }),
  //   );

  //   this.subscription.add(
  //     this.userManagementService.getSelectedUsersAlbum(this.userId).subscribe({
  //       next: (albumData: Album[]) => {
  //         this.albumList = albumData;
  //       },
  //     }),
  //   );
  // }
}
