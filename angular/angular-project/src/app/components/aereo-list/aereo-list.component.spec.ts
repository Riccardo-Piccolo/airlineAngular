import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AereoListComponent } from './aereo-list.component';

describe('AereoListComponent', () => {
  let component: AereoListComponent;
  let fixture: ComponentFixture<AereoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AereoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AereoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
