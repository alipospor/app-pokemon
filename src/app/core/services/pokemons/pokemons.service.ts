import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EntityBase, IPokemon, IPokemonDetalhado } from '../../interfaces/interfaces.index';
import { ServiceBase } from '../service.base';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService extends ServiceBase<IPokemon> {

  protected PATH = 'https://pokeapi.co/api/v2';

  constructor(readonly http: HttpClient) { super(http); }

  public getPokemon(nome?: string): Observable<IPokemonDetalhado> {
    return this.http.get<IPokemonDetalhado>(`${this.PATH}/pokemon/${nome}`);
  }

  public getPokemons(): Observable<EntityBase<IPokemon>> {
    return this.http.get<EntityBase<IPokemon>>(`${this.PATH}/pokemon?limit=${25}&offset=${0}`);
  }

}
