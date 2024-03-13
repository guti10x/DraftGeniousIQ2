import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDesplegableUserComponent } from './btn-desplegable-user.component';

describe('BtnDesplegableUserComponent', () => {
  let component: BtnDesplegableUserComponent;
  let fixture: ComponentFixture<BtnDesplegableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDesplegableUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDesplegableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
