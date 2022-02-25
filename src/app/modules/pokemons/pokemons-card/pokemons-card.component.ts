import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/core/interfaces/pokemons';

@Component({
  selector: 'app-pokemons-card',
  templateUrl: './pokemons-card.component.html',
  styleUrls: ['./pokemons-card.component.scss']
})
export class PokemonsCardComponent implements OnInit {

  @Input()
  pokemon!: IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarUrl() {
    alert(this.pokemon.url);
  }

}
