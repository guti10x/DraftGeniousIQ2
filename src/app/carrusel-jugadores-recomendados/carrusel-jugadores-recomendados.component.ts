import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { VersusJugadoresModalWindowComponent } from '../versus-jugadores-modal-window/versus-jugadores-modal-window.component';

@Component({
  selector: 'carrusel-jugadores-recomendados',
  standalone: true,
  imports: [NgbCarouselModule, VersusJugadoresModalWindowComponent],
  templateUrl: './carrusel-jugadores-recomendados.component.html',
  styleUrl: './carrusel-jugadores-recomendados.component.scss'
})

export class CarruselJugadoresRecomendadosComponent {
  players = [
    {image: "../../assets/players/bellingham.png",name: 'Jude Bellingham',team: "../../assets/teams/10.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "20.000.000 €", dato2: "dato2",goal: 3, assists:3, points: 123},
    {image: "../../assets/players/morata.png",name: 'Álvaro Morata',team: "../../assets/teams/2.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "17.000.000 €", dato2: "dato2",goal: 10, assists:13, points: 33},
    {image: "../../assets/players/mayoral.png",name: 'Borja Mayoral',team: "../../assets/teams/6.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "12.500.000 €", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/pedri.png",name: 'Pedri',team: "../../assets/teams/3.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "9.000.000 €", dato2: "dato2",goal: 3, assists:3, points: 33}
  ];
}