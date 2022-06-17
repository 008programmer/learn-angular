import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { getProducts, Product } from '../ProductModel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    // Find the product that correspond with the id provided in route.
    this.product = getProducts().find(product => product.id === productIdFromRoute);
    console.log(this.product)
  }

  addToCart(product:Product){
      this.cartService.add(product);
      alert("Your Product has been added to cart");
  }


}
