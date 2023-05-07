import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgressComponent } from './barra-progress.component';

describe('BarraProgressComponent', () => {
  let component: BarraProgressComponent;
  let fixture: ComponentFixture<BarraProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
