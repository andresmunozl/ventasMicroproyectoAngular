import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesInventarioComponent } from './reportes-inventario.component';

describe('ReportesInventarioComponent', () => {
  let component: ReportesInventarioComponent;
  let fixture: ComponentFixture<ReportesInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
