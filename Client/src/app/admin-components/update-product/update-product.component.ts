import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  imageUrl: File | null = null;
  constructor(private http: HttpClient) {}
  cancelUpdate(): void {
    this.cancelUpdateEvent.emit();
  }
  handleImage(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.imageUrl = target.files[0];
    }
  }

  updateProduct() {
    try {
      const formData = new FormData();
      formData.append('name', this.selectedProduct.name);
      formData.append('description', this.selectedProduct.description);
      formData.append('price', this.selectedProduct.price.toString());
      formData.append('animal', this.selectedProduct.animal);
      formData.append('category', this.selectedProduct.category);
      if (this.imageUrl) {
        formData.append('imageUrl', this.imageUrl, this.imageUrl.name);
      }
      console.log(formData);
      const productId = this.selectedProduct.id;
      this.http
        .put(`http://localhost:3000/api/product/${productId}`, formData)
        .subscribe(
          (res) => {
            console.log(res);
            this.updateProductEvent.emit(this.selectedProduct);
          },
          (error) => {
            console.error('Error updating product:', error);
          }
        );
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }
}
