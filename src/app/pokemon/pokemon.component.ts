import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonResponse } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

const PokemonType = {
  CHARMANDER: 'charmander',
  BULBASAUR: 'bulbasaur',
  SQUIRTLE: 'squirtle'
};

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  public pokemons$: Observable<Array<PokemonResponse>>;

  public pokemons: Array<PokemonResponse> = [];

  public selectedPokemon: PokemonResponse = null;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons$ = forkJoin(
      Object.values(PokemonType).map(pokemonType =>
        this.pokemonService.getPokemon(pokemonType)
      )
    );
  }

  selectPokemon(pokemon: PokemonResponse) {
    this.selectedPokemon = pokemon;
  }
}
