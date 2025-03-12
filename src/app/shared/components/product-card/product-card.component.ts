import {Component, input, InputSignal} from '@angular/core';
import {Product} from '../../../models/product.type';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<Product>();

  onSelect() {
    console.log(this.product());
  }
}
