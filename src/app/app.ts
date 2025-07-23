
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';
import { UserList } from "./user-list/user-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, RouterModule, CategoryList, BrandList, UserList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  message = 'Xin chào từ AppComponent!';
}
