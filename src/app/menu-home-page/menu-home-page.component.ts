import { Component } from '@angular/core';
import { BtnDesplegableUserComponent } from '../btn-desplegable-user/btn-desplegable-user.component';

@Component({
  selector: 'menu-home-page',
  standalone: true,
  imports: [BtnDesplegableUserComponent],
  templateUrl: './menu-home-page.component.html',
  styleUrl: './menu-home-page.component.scss'
})
export class MenuHomePageComponent {
  money_bank: number = 4.5;
}