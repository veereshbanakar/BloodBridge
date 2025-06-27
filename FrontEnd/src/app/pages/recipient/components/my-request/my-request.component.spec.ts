import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestComponent } from './my-request.component';

describe('MyRequestComponent', () => {
  let component: MyRequestComponent;
  let fixture: ComponentFixture<MyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
