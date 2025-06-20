import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsResponsesComponent } from './donors-responses.component';

describe('DonorsResponsesComponent', () => {
  let component: DonorsResponsesComponent;
  let fixture: ComponentFixture<DonorsResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsResponsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
