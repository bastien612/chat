import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient) { }

   postProduct (product: newProduct): void {
   return this.http.post<Product>(/*a completer*/)
   }
}
