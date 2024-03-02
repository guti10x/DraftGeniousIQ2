import { Component } from '@angular/core';
import { MenuLandingPageComponent } from '../menu-landing-page/menu-landing-page.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [MenuLandingPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
