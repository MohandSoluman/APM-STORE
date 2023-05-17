import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';


@NgModule({
  declarations: [AppComponent, ProductListComponent,ConvertToSpace, StarRatingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
