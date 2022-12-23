import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAereoComponent } from './update-aereo.component';

describe('UpdateAereoComponent', () => {
  let component: UpdateAereoComponent;
  let fixture: ComponentFixture<UpdateAereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAereoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
