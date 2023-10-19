import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-products-confirmation',
  templateUrl: './delete-products-confirmation.component.html',
  styleUrls: ['./delete-products-confirmation.component.css']
})
export class DeleteProductsConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteProductsConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false); 
  }

  onDeleteClick(): void {
    this.dialogRef.close(true); 
  }
}
