import { Injectable } from '@angular/core';
import { IProduct } from './product';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private productUrl: string='api/products/products.json';
    constructor(private http:HttpClient){

    }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data=>console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
     
  }
  
  private handleError(err: HttpErrorResponse) {
    let errMessage='';
    if (err.error instanceof ErrorEvent) {
      errMessage= err.error.message+ 'front end';
    } else {
      errMessage= `Backend returned code ${err.status}, ` +
      `body was: ${err.error}`
     
    }
    return throwError(()=>errMessage)
  }

}
