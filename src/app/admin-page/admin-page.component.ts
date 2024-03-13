import { Component } from '@angular/core';
import { UserListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'admin-page',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
