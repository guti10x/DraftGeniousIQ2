import { Component } from '@angular/core';

@Component({
  selector: 'menu-home-page',
  standalone: true,
  imports: [],
  templateUrl: './menu-home-page.component.html',
  styleUrl: './menu-home-page.component.scss'
})
export class MenuHomePageComponent {
  money_bank: number = 4.5;
}