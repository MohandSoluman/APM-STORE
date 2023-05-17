import { Component,  OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  show = false;
  ButtonText = 'Show';
  products:IProduct[] = [];
  filteredProducts:IProduct[] = [];
  

  constructor(private productService:ProductService){
   

  }

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  onNotify(event:string): void {
    this.pageTitle=event;
    
    
  }

  toggleImage(): void {
    this.show = !this.show;
    this.ButtonText = this.show ? 'Hide' : 'Show';
  }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.filteredProducts=this.products;
    
  }

  
}
