import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .pipe(untilDestroyed(this))
      .subscribe((product) => (this.products = product));
  }

  ngOnDestroy(): void {
    // for untilDestroy pckg
  }
}
