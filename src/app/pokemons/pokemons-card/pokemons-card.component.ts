import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-card',
  templateUrl: './pokemons-card.component.html',
  styleUrls: ['./pokemons-card.component.scss']
})
export class PokemonsCardComponent implements OnInit {

  @Input()
  pokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarUrl() {
    alert(this.pokemon.url);
  }

}
