import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDesplegableNotificacionesComponent } from './btn-desplegable-notificaciones.component';

describe('BtnDesplegableNotificacionesComponent', () => {
  let component: BtnDesplegableNotificacionesComponent;
  let fixture: ComponentFixture<BtnDesplegableNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDesplegableNotificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDesplegableNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
