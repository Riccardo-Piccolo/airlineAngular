import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAereoByAnnoComponent } from './get-aereo-by-anno.component';

describe('GetAereoByAnnoComponent', () => {
  let component: GetAereoByAnnoComponent;
  let fixture: ComponentFixture<GetAereoByAnnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAereoByAnnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAereoByAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
