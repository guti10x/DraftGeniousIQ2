import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet, LoginPageComponent, HomePageComponent, AdminPageComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  user: string = '';
  email: string = '';
  password: string = '';

  constructor() { }

}
