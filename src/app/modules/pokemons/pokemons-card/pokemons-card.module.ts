import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoButtonModule } from '@po-ui/ng-components';

import { PokemonsCardComponent } from './pokemons-card.component';

@NgModule({
  declarations: [PokemonsCardComponent],
  imports: [
    CommonModule,
    PoButtonModule
  ],
  exports: [PokemonsCardComponent]
})
export class PokemonsCardModule { }
