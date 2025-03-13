import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsApiResponse} from '../../models/productsApiResponse.type';
import {Product} from '../../models/product.type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject( HttpClient)
  constructor() { }

  getAllProducts(): Observable<ProductsApiResponse> {
    return this.http.get<ProductsApiResponse>('https://dummyjson.com/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}
