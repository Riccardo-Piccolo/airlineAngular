import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllAereoComponent } from './delete-all-aereo.component';

describe('DeleteAllAereoComponent', () => {
  let component: DeleteAllAereoComponent;
  let fixture: ComponentFixture<DeleteAllAereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllAereoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllAereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
