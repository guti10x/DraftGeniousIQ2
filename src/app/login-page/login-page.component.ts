import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HomePageComponent, AdminPageComponent,RegisterPageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor() { }
}
