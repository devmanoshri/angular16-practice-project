import { UserManagementService } from './../../services/user-management.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  userList = [] as User[];
  subscription = new Subscription();
  constructor(private userManagementService: UserManagementService) {}
  userId!: number;
  showLoader = false;
  hasError = false;

  ngOnInit(): void {
    this.fetchUserList();
  }
  fetchUserList() {
    this.showLoader = true;
    this.hasError = false;
    this.subscription.add(
      this.userManagementService
        .getUserList()
        .pipe(delay(600))
        .subscribe({
          next: (userData: User[]) => {
            this.userList = userData;
            this.showLoader = false;
          },
          error: () => {
            this.showLoader = false;
            this.hasError = true;
          },
        }),
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showPost(userIdVal: number) {
    this.userId = userIdVal;
  }
}
