import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorEditprofileComponent } from './donor-editprofile.component';

describe('DonorEditprofileComponent', () => {
  let component: DonorEditprofileComponent;
  let fixture: ComponentFixture<DonorEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorEditprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
