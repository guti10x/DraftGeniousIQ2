import { Component } from '@angular/core';
import { MenuHomePageComponent } from '../menu-home-page/menu-home-page.component';
import { CarruselJugadoresRecomendadosComponent } from '../carrusel-jugadores-recomendados/carrusel-jugadores-recomendados.component';
import { InfiniteEventScrollComponent } from '../infinite-event-scroll/infinite-event-scroll.component';
import { SoccerFieldComponent } from '../soccer-field/soccer-field.component';
import { CarouselComponent} from '../carousel/carousel.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MenuHomePageComponent,CarruselJugadoresRecomendadosComponent,InfiniteEventScrollComponent, SoccerFieldComponent,CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}