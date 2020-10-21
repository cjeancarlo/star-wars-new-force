import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipInfoDetailComponent } from './ship-info-detail.component';

describe('ShipInfoDetailComponent', () => {
  let component: ShipInfoDetailComponent;
  let fixture: ComponentFixture<ShipInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
