import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './artists/albums/albums.component';
import { AlbumDetailsComponent } from './artists/albums/album-details/album-details.component';
import { SearchAlbumsComponent } from './search-albums/search-albums.component';

const appRoutes: Routes = [
	{ path: 'artists', component: ArtistsComponent },
	{ path: 'artists/:artistName/albums', component: AlbumsComponent },
	{ path: 'artists/:artistName/albums/:albumName', component: AlbumDetailsComponent },
	{ path: 'albums', component: SearchAlbumsComponent },
	{ path: '**', redirectTo: 'artists', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);