import { Component } from '@angular/core';
import { UserListComponent } from '../users-list/users-list.component';
import { MenuAdminComponent } from '../menu-admin/menu-admin.component';

@Component({
  selector: 'admin-page',
  standalone: true,
  imports: [UserListComponent, MenuAdminComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
