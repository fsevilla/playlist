import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class ArtistService {

  constructor(private _http:Http) { }

  getArtists(artistName:string) {
  	let url = `${environment.apiUrl}method=artist.search&artist=${artistName}&api_key=${environment.apiKey}&format=json`;
  	return this._http.get(url)
  		.map(response => response.json().results.artistmatches.artist)
  		.toPromise();
  }

  getArtistAlbums(artistName:string) {
  	let url = `${environment.apiUrl}method=artist.gettopalbums&artist=${artistName}&api_key=${environment.apiKey}&format=json`;
  	return this._http.get(url)
  		.map(response => response.json().topalbums.album)
  		.toPromise();
  }
}
