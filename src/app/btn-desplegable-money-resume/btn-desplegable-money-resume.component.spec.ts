import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDesplegableMoneyResumeComponent } from './btn-desplegable-money-resume.component';

describe('BtnDesplegableMoneyResumeComponent', () => {
  let component: BtnDesplegableMoneyResumeComponent;
  let fixture: ComponentFixture<BtnDesplegableMoneyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDesplegableMoneyResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDesplegableMoneyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
