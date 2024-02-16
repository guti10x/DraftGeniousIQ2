import { Component } from '@angular/core';
import { WelcomeMenuComponent } from '../welcome-menu/welcome-menu.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [WelcomeMenuComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class welcomeComponent {

}