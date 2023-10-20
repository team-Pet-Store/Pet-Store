import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  @Input() selectedProduct!: Product;
  @Output() cancelUpdateEvent = new EventEmitter<void>();
  @Output() updateProductEvent = new EventEmitter<Product>();
  cancelUpdate(): void {
    this.cancelUpdateEvent.emit();
  }

  updateProduct(): void {
    this.updateProductEvent.emit(this.selectedProduct);
  }
}
