import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCardComponent } from './welcome-card.component';

describe('WelcomeCardComponent', () => {
  let component: WelcomeCardComponent;
  let fixture: ComponentFixture<WelcomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
