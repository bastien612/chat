import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-adele-page',
  templateUrl: './adele-page.component.html',
  styleUrls: ['./adele-page.component.scss']
})
export class AdelePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addProduct(): void {
  //add en dur product
    this.productService.postProduct(newProduct)
    .subscribe(/*log consol objet envoye*/);
  }
}
