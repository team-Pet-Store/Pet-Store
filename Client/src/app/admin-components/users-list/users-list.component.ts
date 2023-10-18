import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from 'src/app/components/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any = [];

  constructor(private myservice: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.myservice.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  deleteUser(userId: number) {
    this.myservice.deleteUser(userId).subscribe({
      next: (data: any) => {
        console.log(`User with ID ${userId} deleted successfully.`);
        this.getUsers();
      },
      error: (err: any) => {
        console.log(`Error deleting user with ID ${userId}: ${err}`);
      }
    });
  }

  openDeleteConfirmation(userId: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteUser(userId); 
      }
    });
  }
}
