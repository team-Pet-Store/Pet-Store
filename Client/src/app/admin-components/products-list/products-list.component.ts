import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductsConfirmationComponent } from '../delete-products-confirmation/delete-products-confirmation.component';
import { AddProductsComponent } from '../add-products/add-products.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  modalRef: MdbModalRef<AddProductsComponent> | null = null;
  public products: Product[] = [];
  public selectedProduct: Product | null = null;
  public modal = false;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private modalService: MdbModalService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http
      .get<Product[]>('http://localhost:3000/api/product')
      .subscribe((data) => {
        this.products = data;
      });
  }
  deleteProduct(productId: number): void {
    this.http
      .delete(`http://localhost:3000/api/product/${productId}`)
      .subscribe(() => {
        this.products = this.products.filter(
          (product) => product.id !== productId
        );
      });
  }

  openDeleteConfirmation(productId: number): void {
    const dialogRef = this.dialog.open(DeleteProductsConfirmationComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteProduct(productId);
      }
    });
  }
  openModal() {
    this.modalRef = this.modalService.open(AddProductsComponent, {});
  }

  openUpdateModal(product: Product) {
    this.selectedProduct = product;
    this.toggleModal();
  }

  toggleModal(): void {
    this.modal = !this.modal;
  }
  cancelUpdate(): void {
    this.toggleModal();
  }

  updateProduct(updatedProduct: Product): void {
    this.fetchProducts();
    this.toggleModal();
  }
}
