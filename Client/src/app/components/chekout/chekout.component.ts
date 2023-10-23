import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css'],
})
export class ChekoutComponent {
  @Output() toggleModalEvent = new EventEmitter<void>();
  paymentConfirm = false;
  loading = false;
  paymentConfirmed = false;
  confirmationForm: FormGroup;
  deliveryForm: FormGroup;
  loadingDelivery: boolean = false;
  deliveryConfirmed: boolean = false;

  constructor(private formBuilder: FormBuilder , private router: Router ,private cartService: CartService) {
    this.confirmationForm = this.formBuilder.group({
      confirmationInput: ['', Validators.required],
      cardName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvvCode: ['', Validators.required],
    });
    this.deliveryForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  closeModal() {
    this.toggleModalEvent.emit();
  }
  confirmPayment() {
    this.loading = true;
  
    setTimeout(() => {
      this.paymentConfirm = true;
      this.loading = false;
    }, 2000);
  
    setTimeout(() => {
      this.paymentConfirm = false;
      this.router.navigate(['/order']);

    }, 5000);
  
  }
  
  onSubmit() {
    if (this.confirmationForm.valid) {
      // Get the form data
      const formData = this.confirmationForm.value;
      console.log('Submitted data:', formData);
  
      try {
        // Assuming that removeAllFromCart is a method in your cart service
        // Make sure it correctly removes all products from the cart.
        this.cartService.removeAllFromCart();
  
        // After removing products from the cart, you can perform the confirmation.
        this.confirmPayment();
      } catch (error) {
        console.error('Error during order confirmation:', error);
      }
    } else {
      // If the form is not valid, mark the required fields as touched.
      this.confirmationForm.markAllAsTouched();
    }
  }
  
  confirmDelivery() {
    if (this.deliveryForm.valid) {
      this.loadingDelivery = true;
  
      setTimeout(() => {
        this.loadingDelivery = false;
        this.deliveryConfirmed = true;
  
        setTimeout(() => {
          this.deliveryConfirmed = false;
  
          
          this.router.navigate(['/order']);
        }, 1000); 
      }, 2000);
    } else {
      this.deliveryForm.markAllAsTouched();
    }
  }
  

  
}
