import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAereoComponent } from './delete-aereo.component';

describe('DeleteAereoComponent', () => {
  let component: DeleteAereoComponent;
  let fixture: ComponentFixture<DeleteAereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAereoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
