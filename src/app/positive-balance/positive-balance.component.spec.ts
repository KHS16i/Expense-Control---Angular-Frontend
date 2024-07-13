import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveBalanceComponent } from './positive-balance.component';

describe('PositiveBalanceComponent', () => {
  let component: PositiveBalanceComponent;
  let fixture: ComponentFixture<PositiveBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositiveBalanceComponent]
    });
    fixture = TestBed.createComponent(PositiveBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
