// add-products.component.ts
import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AuthService } from './add-product.service';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productForm: FormGroup; 

  constructor(
    public modalRef: MdbModalRef<AddProductsComponent>,
    private authServices: AuthService,
    private formBuilder: FormBuilder
  ) {
  
    this.productForm = this.formBuilder.group({
      name: '',
      category: '',
      animal: '',
      imageUrl: null,
      description: '',
      price: ''
    });
  }

  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.productForm.patchValue({ imageUrl: inputElement.files[0] });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.authServices.createProduct(productData, productData.imageUrl)
        .subscribe((response) => {
        
        });
    }
  }
}