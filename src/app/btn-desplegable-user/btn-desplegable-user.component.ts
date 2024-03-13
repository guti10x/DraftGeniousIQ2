import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'btn-user',
  standalone: true,
  templateUrl: './btn-desplegable-user.component.html',
  styleUrl: './btn-desplegable-user.component.scss'
})
export class BtnDesplegableUserComponent {
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}