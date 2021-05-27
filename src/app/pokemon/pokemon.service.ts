import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from './pokemon.interface';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  readonly BASE_URL: string = `https://pokeapi.co/api/v2/pokemon/`;
  constructor(private http: HttpClient) {}

  /**
   *  @param {string} pokemonType
   *  @returns {Observable} of PokemonResponse
   */
  getPokemon(pokemonType: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.BASE_URL}${pokemonType}`);
  }
}
