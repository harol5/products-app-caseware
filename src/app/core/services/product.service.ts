import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject( HttpClient)
  constructor() { }

  getAllProducts() {
    return this.http.get<Array<{name: string, title:string}>>('https://dummyjson.com/products');
  }
}
