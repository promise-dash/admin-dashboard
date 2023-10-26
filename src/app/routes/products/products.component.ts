import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(public productService: ProductsService){
      console.log(productService.productList);
  }

  handleClick(product: any){
    this.productService.Cart.push(product);
    alert(`${product.name} Added to cart`)
  }

}
