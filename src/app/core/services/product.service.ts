import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsApiResponse} from '../../models/productsApiResponse.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject( HttpClient)
  constructor() { }

  getAllProducts() {
    return this.http.get<ProductsApiResponse>('https://dummyjson.com/products');
  }
}
