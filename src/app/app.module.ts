import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistService } from './artists/artist.service';
import { routing } from './app.routing';
import { AlbumsComponent } from './artists/albums/albums.component';
import { AlbumDetailsComponent } from './artists/albums/album-details/album-details.component';
import { AlbumService } from './artists/albums/album.service';
import { HeaderComponent } from './header/header.component';
import { SearchAlbumsComponent } from './search-albums/search-albums.component';
import { SpinnerDirective } from './shared/directives/spinner.directive'
@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    HeaderComponent,
    SearchAlbumsComponent,
    SpinnerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [ 
    ArtistService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
