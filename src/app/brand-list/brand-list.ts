import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-brand-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css']
})
export class BrandList{
  brands = [
    { id: 1, name: 'Nike', origin: 'USA', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { id: 2, name: 'Adidas', origin: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
    { id: 3, name: 'Puma', origin: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg' },
    { id: 4, name: 'Converse', origin: 'USA', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Converse_logo.svg' },
  ];
}
