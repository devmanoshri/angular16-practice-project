import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumRoutingModule } from './album-routing.module';



@NgModule({
  declarations: [
    AlbumComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
