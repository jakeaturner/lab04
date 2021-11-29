import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarProductCardComponent } from './similar-product-card/similar-product-card.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';



@NgModule({
  declarations: [
    SimilarProductCardComponent,
    ArtistCardComponent,
    ArtworkCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimilarProductCardComponent,
    ArtistCardComponent,
    ArtworkCardComponent
  ]
})
export class SharedComponentsModule { }
