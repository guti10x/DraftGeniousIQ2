import { Component, inject, TemplateRef, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SharedDataMenuVisibleService } from '../shared-data-menu-visible.service';

@Component({
  selector: 'btn-user',
  standalone: true,
  imports: [RouterLink, RouterOutlet, LandingPageComponent],
  templateUrl: './btn-desplegable-user.component.html',
  styleUrl: './btn-desplegable-user.component.scss'
})
export class BtnDesplegableUserComponent {
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  users = {
    name: ["Juan Pérez", "María García", "Pedro López"],
    email: ["juan@example.com", "maria@example.com", "pedro@example.com"],
    psw: ["contraseña123", "maria456", "pedro789"]
  };

  original_psw = "";

  mostrarCensurada: boolean = false;

  constructor(private sharedDataMenuVisibleService: SharedDataMenuVisibleService) {}

  cambiarVisibilidadMenu(): void {
    this.sharedDataMenuVisibleService.toggleMenuVisibility();
  }

  alternarMostrarContrasena(): void {
    this.mostrarCensurada = !this.mostrarCensurada;
    if (this.mostrarCensurada) {
      this.mostrarContrasenaCensurada(this.users.psw[0]);
    } else {
      this.mostrarContrasena();
    }
  }

  mostrarContrasenaCensurada(contrasena_a_censurar: string) {
    this.original_psw = this.users.psw[0];
    this.users.psw[0] = contrasena_a_censurar.replace(/./g, '*');
  }

  mostrarContrasena() {
    this.users.psw[0] = this.original_psw;
  }

  actualizarContrasena() {
    console.log("Actualizar:", this.users.psw[0]);
  }

  ngOnInit(): void {
    this.alternarMostrarContrasena();
  }
}