import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[] = [];
  constructor(private http: HttpClient) 
  { }

  add(product:Product){
    this.items.push(product);
  }

  getAll(){
    return this.items;
  }

  clear(){
    this.items = [];
    return this.getAll();
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
