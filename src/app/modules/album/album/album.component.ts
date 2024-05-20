import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from './../../../models/album.model';
import { AlbumService } from './../album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnDestroy {
  albumList = [] as Album[];
  subscription = new Subscription();
  selectedAlbumId: number | undefined;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
  ) {}

  userId!: number;
  userName!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = +(params.get('id') || '');
      this.userName = params.get('userName') || '';
      if (this.userId) {
        this.fetchAlbum();
      }
    });
  }
  fetchAlbum() {
    this.subscription.add(
      this.albumService.getAlbumList(this.userId).subscribe({
        next: (data: Album[]) => {
          this.albumList = data;
        },
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showPhotos(albumId: number): void {
    this.selectedAlbumId = albumId;
  }
}
