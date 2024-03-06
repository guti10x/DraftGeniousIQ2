import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carrusel-jugaodres-recomendados',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carrusel-jugaodres-recomendados.component.html',
  styleUrl: './carrusel-jugaodres-recomendados.component.scss'
})

export class CarruselJugaodresRecomendadosComponent {
  images = ["../../assets/players/bellingham.png", 
  "../../assets/players/morata.png",
  "../../assets/players/mayoral.png",
  "../../assets/players/pedri.png"];
}