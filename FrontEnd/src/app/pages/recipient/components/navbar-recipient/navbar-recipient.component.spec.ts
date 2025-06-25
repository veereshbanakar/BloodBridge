import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRecipientComponent } from './navbar-recipient.component';

describe('NavbarRecipientComponent', () => {
  let component: NavbarRecipientComponent;
  let fixture: ComponentFixture<NavbarRecipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarRecipientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
