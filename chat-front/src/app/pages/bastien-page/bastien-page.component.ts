import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { Product } from '../../models/product/product';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-bastien-page',
  templateUrl: './bastien-page.component.html',
  styleUrls: ['./bastien-page.component.scss']
})
export class BastienPageComponent implements OnInit {
  newProduct: Product = { id: 10, name: "Thon" };


  constructor() { }


  ngOnInit() {
  }

  // addProduct(): void {
  //   //add en dur product
  //   this.productService.postProduct(this.newProduct).subscribe(response => console.log("Produit créé : ", response));
  // }
}
