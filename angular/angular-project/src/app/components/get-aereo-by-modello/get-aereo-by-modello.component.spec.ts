import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAereoByModelloComponent } from './get-aereo-by-modello.component';

describe('GetAereoByModelloComponent', () => {
  let component: GetAereoByModelloComponent;
  let fixture: ComponentFixture<GetAereoByModelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAereoByModelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAereoByModelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
