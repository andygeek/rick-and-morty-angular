import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTE: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'character/:id', component: CharacterComponent },
    { path: 'search/:term' , component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);