import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductsConfirmationComponent } from './delete-products-confirmation.component';

describe('DeleteProductsConfirmationComponent', () => {
  let component: DeleteProductsConfirmationComponent;
  let fixture: ComponentFixture<DeleteProductsConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProductsConfirmationComponent]
    });
    fixture = TestBed.createComponent(DeleteProductsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
