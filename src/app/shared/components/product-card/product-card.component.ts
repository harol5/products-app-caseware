import {Component, input, InputSignal, output} from '@angular/core';
import {Product} from '../../../models/product.type';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<Product>();
  productSelected = output<number>();

  onSelect() {
    this.productSelected.emit(this.product().id);
  }
}
