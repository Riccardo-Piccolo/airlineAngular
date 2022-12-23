import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAereoComponent } from './add-aereo.component';

describe('AddAereoComponent', () => {
  let component: AddAereoComponent;
  let fixture: ComponentFixture<AddAereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAereoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
