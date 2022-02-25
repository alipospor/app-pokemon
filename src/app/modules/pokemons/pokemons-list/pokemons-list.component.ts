import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IPokemon } from 'src/app/core/interfaces/pokemons';

import { PokemonsService } from '../../../core/services/services.index';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  public pokemons: IPokemon[] = [];

  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
    this.service.getPokemons().subscribe({
      next: (dados) => { this.pokemons = dados.results; },
      error: (erro) => { console.log(erro) },
      complete: () => { console.log('complete') }
    });
  }

  /* public name() {
    this.service.getPokemons()
      .pipe()
      .subscribe(dados => {
        this.pokemons = dados.results;
      .pipe
      });
  }

  public obterDadosPokemons() {
    forkJoin({
      listagem: this.service.getPokemons(),
      dados: this.service.getPokemon()
    });
  } */
}
