import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteEventScrollComponent } from './infinite-event-scroll.component';

describe('InfiniteEventScrollComponent', () => {
  let component: InfiniteEventScrollComponent;
  let fixture: ComponentFixture<InfiniteEventScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteEventScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiniteEventScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
