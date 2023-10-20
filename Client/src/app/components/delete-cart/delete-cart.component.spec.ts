import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCartComponent } from './delete-cart.component';

describe('DeleteCartComponent', () => {
  let component: DeleteCartComponent;
  let fixture: ComponentFixture<DeleteCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCartComponent]
    });
    fixture = TestBed.createComponent(DeleteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
