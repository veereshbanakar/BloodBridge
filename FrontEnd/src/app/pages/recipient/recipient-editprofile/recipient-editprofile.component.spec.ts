import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientEditprofileComponent } from './recipient-editprofile.component';

describe('RecipientEditprofileComponent', () => {
  let component: RecipientEditprofileComponent;
  let fixture: ComponentFixture<RecipientEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientEditprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
