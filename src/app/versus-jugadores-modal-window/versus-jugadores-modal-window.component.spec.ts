import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusJugadoresModalWindowComponent } from './versus-jugadores-modal-window.component';

describe('VersusJugadoresModalWindowComponent', () => {
  let component: VersusJugadoresModalWindowComponent;
  let fixture: ComponentFixture<VersusJugadoresModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersusJugadoresModalWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersusJugadoresModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
