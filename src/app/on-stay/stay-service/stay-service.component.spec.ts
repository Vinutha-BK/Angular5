import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayServiceComponent } from './stay-service.component';

describe('StayServiceComponent', () => {
  let component: StayServiceComponent;
  let fixture: ComponentFixture<StayServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
