import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionbarraComponent } from './navegacionbarra.component';

describe('NavegacionbarraComponent', () => {
  let component: NavegacionbarraComponent;
  let fixture: ComponentFixture<NavegacionbarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionbarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionbarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
