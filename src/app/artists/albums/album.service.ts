import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../../environments/environment';

@Injectable()
export class AlbumService {

  constructor(private _http:Http) { }

  getAlbumDetails(artist:string, album:string) {
  	let url = `${environment.apiUrl}method=album.getInfo&artist=${artist}&album=${album}&api_key=${environment.apiKey}&format=json`;
  	return this._http.get(url)
  		.map(response => response.json().album)
  		.toPromise();
  }

  getAlbums(album:string) {
  	let url = `${environment.apiUrl}method=album.search&album=${album}&api_key=${environment.apiKey}&format=json`;
  	return this._http.get(url)
  		.map(response => response.json().results.albummatches.album)
  		.toPromise();
  }

}
