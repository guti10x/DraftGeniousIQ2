import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingApplicationComponent } from '../landing-application/landing-application.component';
import { LandingPricingComponent } from '../landing-pricing/landing-pricing.component';
import { LandingDocumentationComponent } from '../landing-documentation/landing-documentation.component';
import { LandingDownloadComponent } from '../landing-download/landing-download.component';
import { LandingAboutUsComponent } from '../landing-about-us/landing-about-us.component';

@Component({
  selector: 'menu-landing-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LandingApplicationComponent, LandingPricingComponent, LandingDocumentationComponent, LandingDownloadComponent, LandingAboutUsComponent ],
  templateUrl: './menu-landing-page.component.html',
  styleUrl: './menu-landing-page.component.scss'
})
export class MenuLandingPageComponent {

}