import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarsaldoComponent } from './ingresarsaldo.component';

describe('IngresarsaldoComponent', () => {
  let component: IngresarsaldoComponent;
  let fixture: ComponentFixture<IngresarsaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarsaldoComponent]
    });
    fixture = TestBed.createComponent(IngresarsaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
