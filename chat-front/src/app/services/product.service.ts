import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient) { }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:", product);
  }
}
