import { Component } from '@angular/core';
import { MenuHomePageComponent } from '../menu-home-page/menu-home-page.component';
import { CarruselJugadoresRecomendadosComponent } from '../carrusel-jugadores-recomendados/carrusel-jugadores-recomendados.component';
import { VersusJugadoresModalWindowComponent } from '../versus-jugadores-modal-window/versus-jugadores-modal-window.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MenuHomePageComponent,CarruselJugadoresRecomendadosComponent, VersusJugadoresModalWindowComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}