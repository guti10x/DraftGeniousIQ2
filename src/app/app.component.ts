import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, LandingPageComponent,HomePageComponent,AdminPageComponent,LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DraftGeniousIQ2';
}
