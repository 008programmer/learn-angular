import { Component, OnInit } from "@angular/core";
import { getProducts, Product } from "../ProductModel";


@Component({
    selector: "product-list",
    templateUrl: "product-list.component.html",
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    title = "Products"
    products: Product[] = [];

    ngOnInit(): void {
        this.products = getProducts();
    }

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }

}