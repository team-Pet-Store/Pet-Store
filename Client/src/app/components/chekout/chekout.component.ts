import { Component,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent {
  
  @Output() toggleModalEvent = new EventEmitter<void>();
  paymentConfirm=false;
  loading = false;
  paymentConfirmed = false;
  confirmationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.confirmationForm = this.formBuilder.group({
      confirmationInput: ['', Validators.required],
      cardName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvvCode: ['', Validators.required],
    });
  }

    closeModal() {
      this.toggleModalEvent.emit()
    }
    confirmPayment(){
      this.loading = true;
    
    setTimeout(() => {
    this.paymentConfirm = true;
      this.loading = false; 
    }, 2000); 
  
  setTimeout(() => {
    this.paymentConfirm= false;
  }, 4000); // 5000 milliseconds (5 seconds)

}


  
  }


