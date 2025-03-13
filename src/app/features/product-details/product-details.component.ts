import {Component, inject, input, signal} from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {catchError} from 'rxjs';
import {Product} from '../../models/product.type';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id = input.required<number>();
  productDetails = signal<Product | null>(null);
  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit() {
    this.productService.getProductById(this.id())
      .pipe(
        catchError(err => {
          // routes to products page if id on path not found.
          if(err.status === 404) {
            this.router.navigate(['/products']);
          }
          throw err;
        })
      )
      .subscribe(data => {
        this.productDetails.set(data);
      })
  }
}
