import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSoporteBPMComponent } from './consulta-soporte-bpm.component';

describe('ConsultaSoporteBPMComponent', () => {
  let component: ConsultaSoporteBPMComponent;
  let fixture: ComponentFixture<ConsultaSoporteBPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSoporteBPMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSoporteBPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
