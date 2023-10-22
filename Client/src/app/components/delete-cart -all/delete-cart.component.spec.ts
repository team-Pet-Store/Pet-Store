import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCartAllComponent } from './delete-cart.component';

describe('DeleteCartComponent', () => {
  let component: DeleteCartAllComponent;
  let fixture: ComponentFixture<DeleteCartAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCartAllComponent]
    });
    fixture = TestBed.createComponent(DeleteCartAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
