import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'btn-desplegable-notificaciones',
  standalone: true,
  imports: [],
  templateUrl: './btn-desplegable-notificaciones.component.html',
  styleUrl: './btn-desplegable-notificaciones.component.scss'
})
export class BtnDesplegableNotificacionesComponent {
  notifications: string[] = [
    "Notification received 1",
    "Notification received 2",
    "Notification received 3",
    "Notification received 4",
    "Notification received 5",
    "Notification received 6",
    "Notification received 7",
    "Notification received 8",
    "Notification received 9",
    "Notification received 10"
  ];
  
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}