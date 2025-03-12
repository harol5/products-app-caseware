import {Component, inject, signal} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {catchError} from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  title = 'product-app-caseware';
  count = signal(0);

  increment(event: Event) {
    this.count.set(this.count() + 1);
    console.log(event);
  }
}
