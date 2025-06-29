import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDonorComponent } from './available-donor.component';

describe('AvailableDonorComponent', () => {
  let component: AvailableDonorComponent;
  let fixture: ComponentFixture<AvailableDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableDonorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
