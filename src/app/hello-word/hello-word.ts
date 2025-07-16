import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hello-word',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hello-word.html',
  styleUrls: ['./hello-word.css']
})
export class HelloWord {
  products = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Phone", price: 500, inStock: false },
    { id: 3, name: "Tablet", price: 300, inStock: true },
  ];
  filterText = "";

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}