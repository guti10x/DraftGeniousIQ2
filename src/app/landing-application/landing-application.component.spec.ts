import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingApplicationComponent } from './landing-application.component';

describe('LandingApplicationComponent', () => {
  let component: LandingApplicationComponent;
  let fixture: ComponentFixture<LandingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
