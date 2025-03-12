import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {signal} from "@angular/core"
import {ProductService} from "./core/services/product.service";
import {catchError} from 'rxjs';
import {ProductListComponent} from './features/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
