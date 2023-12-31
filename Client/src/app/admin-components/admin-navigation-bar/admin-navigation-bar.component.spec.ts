import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationBarComponent } from './admin-navigation-bar.component';

describe('AdminNavigationBarComponent', () => {
  let component: AdminNavigationBarComponent;
  let fixture: ComponentFixture<AdminNavigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavigationBarComponent]
    });
    fixture = TestBed.createComponent(AdminNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
