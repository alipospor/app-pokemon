import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoListViewModule } from '@po-ui/ng-components';

import { PokemonsCardModule } from '../pokemons-card/pokemons-card.module';
import { PokemonsListComponent } from './pokemons-list.component';

@NgModule({
  declarations: [PokemonsListComponent],
  imports: [
    CommonModule,
    PoListViewModule,
    PokemonsCardModule
  ],
  exports: [PokemonsListComponent]
})
export class PokemonsListModule { }
