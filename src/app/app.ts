
import { Component } from '@angular/core';
import { HelloWord } from './hello-word/hello-word';
import { RouterModule } from '@angular/router';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWord, RouterModule, CategoryList, BrandList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  message = 'Xin chào từ AppComponent!';
}
