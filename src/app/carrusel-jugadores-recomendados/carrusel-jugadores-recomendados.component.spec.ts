import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselJugadoresRecomendadosComponent } from './carrusel-jugadores-recomendados.component';

describe('CarruselJugadoresRecomendadosComponent', () => {
  let component: CarruselJugadoresRecomendadosComponent;
  let fixture: ComponentFixture<CarruselJugadoresRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselJugadoresRecomendadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselJugadoresRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
