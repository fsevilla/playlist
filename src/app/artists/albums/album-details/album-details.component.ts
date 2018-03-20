import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AlbumService } from './../album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  
  artistName:string;
  albumName:string;
  albumDetails:any;
  albumTracks: Array<any>;
  dataLoaded:boolean;
  constructor(
  	private route:ActivatedRoute,
  	private albumService: AlbumService,
    private location: Location
  ) { }

  ngOnInit() {
  		this.route.params.subscribe(params => {
  			this.artistName = params.artistName;
  			this.albumName = params.albumName;
  			this.getAlbumDetails();
  		});  		
  }

  getAlbumDetails() {
  	console.log(`Album ${this.albumName} de ${this.artistName}`);
  	this.albumService.getAlbumDetails(this.artistName, this.albumName)
  		.then(response => {
  			console.log('Album details: ', response);
  			this.albumDetails = response;
  			this.albumTracks = response.tracks.track;
  			this.dataLoaded = true;
  		});
  }

  goBack() {
    this.location.back();
  }

}
