import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carrusel-jugadores-recomendados',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carrusel-jugadores-recomendados.component.html',
  styleUrl: './carrusel-jugadores-recomendados.component.scss'
})

export class CarruselJugadoresRecomendadosComponent {
  images = ["../../assets/players/bellingham.png", 
  "../../assets/players/morata.png",
  "../../assets/players/mayoral.png",
  "../../assets/players/pedri.png"];
}