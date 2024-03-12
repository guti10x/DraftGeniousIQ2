import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'versus-jugadores-modal-window',
  standalone: true,
  imports: [],
  templateUrl: './versus-jugadores-modal-window.component.html',
  styleUrl: './versus-jugadores-modal-window.component.scss'
})
export class VersusJugadoresModalWindowComponent {
  constructor(private modalService: NgbModal) { }

  openSM(contenido: any) {
    // Use NgbModal to open the modal
    const modalRef = this.modalService.open(contenido, { size: 'lg' }); // You can customize the modal options here
    // Additional modal configuration or handling can be done here
  }
}