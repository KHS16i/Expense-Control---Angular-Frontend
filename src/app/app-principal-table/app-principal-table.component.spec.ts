import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrincipalTableComponent } from './app-principal-table.component';

describe('AppPrincipalTableComponent', () => {
  let component: AppPrincipalTableComponent;
  let fixture: ComponentFixture<AppPrincipalTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPrincipalTableComponent]
    });
    fixture = TestBed.createComponent(AppPrincipalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
