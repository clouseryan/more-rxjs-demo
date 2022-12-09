import { Component } from '@angular/core';
import { BehaviorSubject, map, merge, mergeScan, Observable, of, pairwise, ReplaySubject, tap } from 'rxjs';
import { IPokemon } from '../models/pokemon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokeService } from '../poke.service';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { IPokemonChanged } from '../models/event-bus-models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  private _pokemon = new BehaviorSubject<IPokemon[]>([]);
  public pokemon$ = this._pokemon.asObservable();

  public pokemonforBattle = new ReplaySubject<IPokemon>(2);
  public battlePokemon$!: Observable<[ IPokemon, IPokemon ]>;

  public replacePokemon = new ReplaySubject<{ key: string, pokemon: IPokemon }>(1);
  public replacePokemon$ = this.replacePokemon.asObservable();

  public battleTime = false;

  constructor(
    private formBuilder: FormBuilder,
    private pokeService: PokeService,
    private eventBus: NgEventBus) {

    this.eventBus.on('pokemonChanged').subscribe((metaData: MetaData) => {
      const change = metaData.data as IPokemonChanged;
      this.pokeService.getPokemonById(change.pokemonId).pipe(
        map(pokemon => {
          return {
            key: change.key,
            pokemon
          } as { key: string, pokemon: IPokemon };
        }),
        tap(console.log)
      ).subscribe(x => this.replacePokemon.next(x));
    });

    this.pokeService.getPokemon().subscribe(this._pokemon);
    this.battlePokemon$ = this.pokemonforBattle.pipe(
      mergeScan((acc, val, index) => {
        return of([ val, acc[0] ]);
      }, {} as [ IPokemon, IPokemon ])
    );
  }

  addPokemon(pokemon: IPokemon) {
    this.pokemonforBattle.next(pokemon);
  }

  beginBattle() {
    this.battleTime = true
  }
}
