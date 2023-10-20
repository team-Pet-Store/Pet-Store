import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productForm: FormGroup;
  private apiUrl = 'http://localhost:3000/api/product/admin';

  constructor(
    public modalRef: MdbModalRef<AddProductsComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      category: '',
      animal: '',
      description: '',
      price: '',
      imageUrl: null,
    });
  }

  onImageSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.productForm.patchValue({
        imageUrl: target.files[0],
      });
    }
  }

  addProduct(product: any): void {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('animal', product.animal);
    formData.append('image', product.imageUrl);
    formData.append('description', product.description);
    formData.append('price', product.price);

    this.http.post(this.apiUrl, formData).pipe(
      catchError((error) => {
        console.error('Error adding the product:', error);
        return of(null); 
      })
    ).subscribe(() => {
      this.router.navigate(['/admin-productsList']);
      window.location.reload();
    });
  }


  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.addProduct(productData);
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}