import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorResponseComponent } from './donor-response.component';

describe('DonorResponseComponent', () => {
  let component: DonorResponseComponent;
  let fixture: ComponentFixture<DonorResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
