import { Component } from '@angular/core';
import { MenuHomePageComponent } from '../menu-home-page/menu-home-page.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MenuHomePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}