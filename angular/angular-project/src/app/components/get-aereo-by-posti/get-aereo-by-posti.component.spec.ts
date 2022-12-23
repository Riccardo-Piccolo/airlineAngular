import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAereoByPostiComponent } from './get-aereo-by-posti.component';

describe('GetAereoByPostiComponent', () => {
  let component: GetAereoByPostiComponent;
  let fixture: ComponentFixture<GetAereoByPostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAereoByPostiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAereoByPostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
