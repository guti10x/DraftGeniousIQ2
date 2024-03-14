import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDocumentationComponent } from './landing-documentation.component';

describe('LandingDocumentationComponent', () => {
  let component: LandingDocumentationComponent;
  let fixture: ComponentFixture<LandingDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
