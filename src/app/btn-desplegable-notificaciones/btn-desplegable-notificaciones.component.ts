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
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}