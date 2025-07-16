import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chill-components',
  standalone: true,
  imports: [],
  templateUrl: './chill-components.html',
  styleUrls: ['./chill-components.css']
})
export class ChillComponent {
  @Input() childData?: string;
}
