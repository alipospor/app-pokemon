import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then((m) => m.InicioModule)
  },
  {
    path: 'listagem',
    loadChildren: () =>
      import('./modules/pokemons/pokemons-list/pokemons-list.module')
        .then((m) => m.PokemonsListModule)
  }
  /* 
  {
    path: 'pokemon-detalhado/:pokemonId',
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
