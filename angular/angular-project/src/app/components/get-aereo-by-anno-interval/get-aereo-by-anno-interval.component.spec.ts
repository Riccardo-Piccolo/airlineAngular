import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAereoByAnnoIntervalComponent } from './get-aereo-by-anno-interval.component';

describe('GetAereoByAnnoIntervalComponent', () => {
  let component: GetAereoByAnnoIntervalComponent;
  let fixture: ComponentFixture<GetAereoByAnnoIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAereoByAnnoIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAereoByAnnoIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
