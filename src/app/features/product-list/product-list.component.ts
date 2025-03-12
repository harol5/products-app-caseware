import {Component, inject, signal} from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {catchError} from 'rxjs';
import {Product} from '../../models/product.type';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productService = inject(ProductService);
  productListing = signal<Array<Product>>([]);

  ngOnInit() {
    console.log("ngOnInit has ran!!")
    this.productService.getAllProducts()
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      ).subscribe(data => {
        console.log(data);
        this.productListing.set(data.products);
      })
   }
}
