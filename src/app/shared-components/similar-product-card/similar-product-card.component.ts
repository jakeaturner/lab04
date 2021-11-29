import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-similar-product-card',
  templateUrl: './similar-product-card.component.html',
  styleUrls: ['./similar-product-card.component.css']
})
export class SimilarProductCardComponent implements OnInit {
  @Input() item = {image_url: '', description: ''};
  constructor() { }

  ngOnInit() {
    console.log('from similar products card item: ', this.item)
  }

}
