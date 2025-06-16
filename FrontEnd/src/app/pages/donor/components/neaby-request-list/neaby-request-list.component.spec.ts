import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeabyRequestListComponent } from './neaby-request-list.component';

describe('NeabyRequestListComponent', () => {
  let component: NeabyRequestListComponent;
  let fixture: ComponentFixture<NeabyRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeabyRequestListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeabyRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
