import { Component } from '@angular/core';
import { BtnDesplegableUserComponent } from '../btn-desplegable-user/btn-desplegable-user.component';

@Component({
  selector: 'menu-admin',
  standalone: true,
  imports: [BtnDesplegableUserComponent],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss'
})

export class MenuAdminComponent {

}