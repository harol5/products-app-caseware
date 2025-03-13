import {Component, inject, signal} from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {catchError} from 'rxjs';
import {Product} from '../../models/product.type';
import {Router} from '@angular/router';

/*
* this component fetches and displays a list of product.
*/
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productListing = signal<Array<Product>>([]);
  private productService = inject(ProductService);
  private router = inject(Router);

  /*
  * To demonstrate the use of output() and routing,
  * I will navigate to the route programmatically instead
  * of using routerLink.
  */
  onProductClick(productId: number) {
    this.router.navigate(['/products', productId]);
  }

  // fetching products
  ngOnInit() {
    this.productService.getAllProducts()
      .pipe(
        catchError(err => {
          throw err;
        })
      ).subscribe(data => {
        this.productListing.set(data.products);
      })
   }
}
