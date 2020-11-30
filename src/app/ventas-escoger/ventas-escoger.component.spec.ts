import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEscogerComponent } from './ventas-escoger.component';

describe('VentasEscogerComponent', () => {
  let component: VentasEscogerComponent;
  let fixture: ComponentFixture<VentasEscogerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasEscogerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasEscogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
