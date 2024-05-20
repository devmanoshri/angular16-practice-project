import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnDestroy, OnChanges {
  @Input() selectedAlbumId = 0;
  photoList = [] as Photo[];
  subscription = new Subscription();

  constructor(private albumService: AlbumService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAlbumId'].currentValue) {
      this.fetchPhotos();
    }
  }
  fetchPhotos(): void {
    this.subscription.add(
      this.albumService.getPhotoList(+this.selectedAlbumId).subscribe({
        next: (data: Photo[]) => {
          this.photoList = data;
        },
      }),
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
