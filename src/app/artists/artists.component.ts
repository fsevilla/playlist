import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artistName:string = '';
  user:any = {};
  artists:Array<any> = [];
  constructor(private _artistService: ArtistService) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  searchArtist(){
  	this._artistService.getArtists(this.artistName)
  		.then(response => {
  			console.log('Response: ', response);
  			this.artists = response;
  		});
  }

  cancel(){
  	console.log('No se va a buscar nada');
  }

}
