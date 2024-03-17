import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  players = [
    {image: "../../assets/players/bellingham.png",name: 'Jude Bellingham',team: "../../assets/teams/10.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/morata.png",name: 'Álvaro Morata',team: "../../assets/teams/2.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/mayoral.png",name: 'Borja Mayoral',team: "../../assets/teams/6.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/pedri.png",name: 'Pedri',team: "../../assets/teams/3.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33}
  ];

  constructor(private modalService: NgbModal) { }

  openSM(contenido: any) {
    // Use NgbModal to open the modal
    const modalRef = this.modalService.open(contenido, { size: 'lg' });
    
  }
}