import { Component } from '@angular/core';
import { MenuLandingPageComponent } from '../menu-landing-page/menu-landing-page.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [MenuLandingPageComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
