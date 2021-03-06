import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-adele-page',
  templateUrl: './adele-page.component.html',
  styleUrls: ['./adele-page.component.scss']
})
export class AdelePageComponent implements OnInit {
  newProduct: any = { name: "Thon" };


  constructor(private productService: ProductService) { }


  ngOnInit() {
  }


  addProduct(): void {
    this.productService.postProduct(this.newProduct).subscribe(response => console.log("Produit créé : ", response));
  }
}
