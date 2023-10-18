
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface User {
  id: number;
  role: string;
  // Add other user properties here
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit  {
  users: User[] = [];
  showConfirmationModal = false;
  selectedUser: number | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
}


fetchUsers() {
  this.http.get<User[]>('http://localhost:3000/api/users').subscribe(
    (response) => {
      this.users = response;
    },
    (error) => {
      console.error('Error fetching Users:', error);

      if (error.status === 401) {
        localStorage.clear();
        this.router.navigate(['/Login']);
      } else if (error.status === 403) {
        this.router.navigate(['/HomePage']);
      }
    }
  );
}

handleDeleteUser(userId: number) {
  this.selectedUser = userId;
  this.showConfirmationModal = true;
}


handleConfirmationConfirm() {
  if (this.selectedUser !== null) {
    this.http.delete(`http://localhost:3000/api/users/${this.selectedUser}`).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== this.selectedUser);
        console.log('User deleted successfully.');
      },
      (error) => {
        console.error('Error deleting user:', error);

        if (error.status === 401) {
          localStorage.clear();
          this.router.navigate(['/Login']);
        } else if (error.status === 403) {
          this.router.navigate(['/HomePage']);
        }
      }
    );
  }

  this.showConfirmationModal = false;
  this.selectedUser = null;
}
}