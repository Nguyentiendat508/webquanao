import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail implements OnInit {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      image: 'https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16/lifestyle/-1024w2/gsmarena_001.jpg',
      inStock: true,
    },
    {
      id: 2,
      name: 'Phone',
      price: 500,
      image: 'https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16/lifestyle/-1024w2/gsmarena_001.jpg',
      inStock: false,
    },
    {
      id: 3,
      name: 'Tablet',
      price: 300,
      image: 'https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16/lifestyle/-1024w2/gsmarena_001.jpg',
      inStock: true,
    },
  ];

  product: any = null;
  productId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productId = id;
      this.product = this.products.find(p => p.id === id);
    });
  }
} 