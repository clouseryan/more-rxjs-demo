import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  public getPokemon() {
    return this.http.get<IPokemon[]>('http://localhost:3000/get-pokemon');
  }

  public createPokemon(pokemon: IPokemon) {
    return this.http.post<IPokemon>('http://localhost:3000/pokemon', pokemon);
  }

  getPokemonById(id: any) {
    return this.http.get<IPokemon>(`http://localhost:3000/pokemon/${id}`);
  }
}
