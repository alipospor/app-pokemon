import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../../core/services/services.index';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  public pokemons: any = [];

  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
    this.service.getPokemons().subscribe(pokemons => {
      console.log(pokemons)
      this.pokemons = pokemons
    });
  }

}
