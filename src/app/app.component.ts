import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {signal} from "@angular/core"
import {ProductService} from "./core/services/product.service";
import {catchError} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-app-caseware';
  count = signal(0);
  productService = inject(ProductService);

  increment(event: Event) {
    this.count.set(this.count() + 1);
    console.log(event);
  }

  getProducts() {
    this.productService.getAllProducts()
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      ).subscribe(data => {
        console.log(data);
      })
  }

}
