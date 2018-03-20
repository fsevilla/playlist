import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ArtistService } from './../artist.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  albums:Array<any>;
  artistName:string;
  subscription: Subscription;
  constructor(
  	private route:ActivatedRoute,
  	private artistService: ArtistService
  ) { }

  ngOnInit() {
  	this.subscription = this.route.params.subscribe(params => {
  		console.log('Route params', params);
  		this.artistName = params.artistName;
  		this.getAlbums();
  	});
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  getAlbums() {
  	this.artistService.getArtistAlbums(this.artistName)
  		.then(response => {
  			this.albums = response;
  		});

  }

}
