import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressCardComponent } from './adress-card.component';

describe('AdressCardComponent', () => {
  let component: AdressCardComponent;
  let fixture: ComponentFixture<AdressCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
