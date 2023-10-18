import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any = [];

  constructor(
    private myservice: UserService,
  ) { }

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
}
