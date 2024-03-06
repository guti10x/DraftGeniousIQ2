import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselJugaodresRecomendadosComponent } from './carrusel-jugaodres-recomendados.component';

describe('CarruselJugaodresRecomendadosComponent', () => {
  let component: CarruselJugaodresRecomendadosComponent;
  let fixture: ComponentFixture<CarruselJugaodresRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselJugaodresRecomendadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselJugaodresRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
