import { UserManagementService } from './../../services/user-management.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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

  ngOnInit(): void {
    this.subscription.add(
      this.userManagementService.getUserList().subscribe({
        next: (userData: User[]) => {
          this.userList = userData;
        },
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showPost(userIdVal:number){
    this.userId = userIdVal
  }
}
