import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})


export class StarRatingComponent implements OnChanges{
  @Input() rating:number=0;
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  cropWidth:number=75;


  ngOnChanges(): void {
    this.cropWidth = this.rating*75/5
  }
  onClick():void{
  
    this.notify.emit( `the selected Product rating = ${this.rating}`);
    
    
  }

}
