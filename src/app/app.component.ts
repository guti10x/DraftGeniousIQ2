import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {welcomeComponent} from './welcome/welcome.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, welcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DraftGeniousIQ';
}
