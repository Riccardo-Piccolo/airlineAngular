import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAereoByCodiceComponent } from './get-aereo-by-codice-compagnia.component';

describe('GetAereoByCodiceComponent', () => {
  let component: GetAereoByCodiceComponent;
  let fixture: ComponentFixture<GetAereoByCodiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAereoByCodiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAereoByCodiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
