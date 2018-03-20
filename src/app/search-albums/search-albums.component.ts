import { Component, OnInit } from '@angular/core';
import { AlbumService } from './../artists/albums/album.service';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrls: ['./search-albums.component.css']
})
export class SearchAlbumsComponent implements OnInit {

  albums:Array<any>;
  dataLoaded:boolean;
  album:string;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  getAlbums() {
  	this.albumService.getAlbums(this.album)
  		.then(response => {
  			this.albums = response;
  			this.dataLoaded = true;
  		});
  }

}
