import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsComponent } from './donors.component';

describe('DonorsComponent', () => {
  let component: DonorsComponent;
  let fixture: ComponentFixture<DonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
