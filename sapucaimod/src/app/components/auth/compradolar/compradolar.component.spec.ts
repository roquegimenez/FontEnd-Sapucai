import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradolarComponent } from './compradolar.component';

describe('CompradolarComponent', () => {
  let component: CompradolarComponent;
  let fixture: ComponentFixture<CompradolarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompradolarComponent]
    });
    fixture = TestBed.createComponent(CompradolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
