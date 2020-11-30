import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarproductoproveedorComponent } from './comprarproductoproveedor.component';

describe('ComprarproductoproveedorComponent', () => {
  let component: ComprarproductoproveedorComponent;
  let fixture: ComponentFixture<ComprarproductoproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarproductoproveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarproductoproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
