import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-create.html',
  styleUrls: ['./product-create.css']
})
export class ProductCreate {
  product = {
    title: '',
    image: ''
  };

  handleSubmit(form: any) {
    if (form.valid) {
      console.log('Product:', this.product);
      console.log("thành công");
      
      form.resetForm();
    }
  }
} 