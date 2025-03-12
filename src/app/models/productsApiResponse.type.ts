import {Product} from './product.type';

export type ProductsApiResponse = {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
