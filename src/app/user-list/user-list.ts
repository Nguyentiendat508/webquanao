import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserList {
  filterText = '';

  users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
    { id: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
    { id: 3, name: 'Lê Văn C', email: 'c@gmail.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd@gmail.com' },
  ];

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
