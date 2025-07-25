import { Routes } from '@angular/router';
import { BrandList } from './brand-list/brand-list';
import { UserList } from './user-list/user-list';
import { ProductList } from './product-list/product-list';
import { ProductCreate } from './product-create/product-create';
import { CategoryList } from './category-list/category-list';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'products/create',
    component: ProductCreate,
  },
  {
    path: 'product/:id/detail',
    component: ProductDetail,
  },
  {
    path: 'categories',
    component: CategoryList,
  },
  {
    path: 'brands',
    component: BrandList,
  },
  {
    path: 'users',
    component: UserList,
  },
];
