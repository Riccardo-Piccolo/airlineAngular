import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAereoByPostiIntervalComponent } from './get-aereo-by-posti-interval.component';

describe('GetAereoByPostiIntervalComponent', () => {
  let component: GetAereoByPostiIntervalComponent;
  let fixture: ComponentFixture<GetAereoByPostiIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAereoByPostiIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAereoByPostiIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
