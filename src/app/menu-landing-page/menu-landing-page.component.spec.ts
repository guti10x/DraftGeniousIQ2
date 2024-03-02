import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLandingPageComponent } from './menu-landing-page.component';

describe('MenuLandingPageComponent', () => {
  let component: MenuLandingPageComponent;
  let fixture: ComponentFixture<MenuLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
