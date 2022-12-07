import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { Observable, of, Subject, merge, mergeScan, tap } from 'rxjs';
import { IBattle } from '../models/battle';
import { updateBattleState } from './battle-functions';
import { MatDialog } from '@angular/material/dialog';
import { SwapMeComponent } from './swap-me/swap-me.component';
import { NgEventBus } from 'ng-event-bus';
import { IPokemonChanged } from '../models/event-bus-models';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: [ './battle.component.scss' ]
})
export class BattleComponent implements OnInit {
  @Input() pokemon!: [ IPokemon, IPokemon ] | null;

  @Input() replacePoke$!: Observable<{ key: string, pokemon: IPokemon }>;

  public battle$!: Observable<IBattle>;

  public poke1Attack$ = new Subject<IPokemon>();
  public poke2Attack$ = new Subject<IPokemon>();

  public battleStart$ = of(true);

  constructor(private dialog: MatDialog, private eventBus: NgEventBus) {

  }


  ngOnInit() {

    const merged = merge(this.poke1Attack$, this.poke2Attack$, this.replacePoke$, this.battleStart$);

    this.battle$ = merged.pipe(
      tap(console.log),
      mergeScan(updateBattleState, {
        pokemon1: this.pokemon![0],
        pokemon2: this.pokemon![1],
        pokemon1Hp: this.pokemon![0].base.HP,
        pokemon2Hp: this.pokemon![1].base.HP,
        actions: []
      } as IBattle)
    );

    this.battleStart$.subscribe();
  }

  attack(pokemon: IPokemon) {
    if (pokemon.id === this.pokemon![0].id) {
      this.poke1Attack$.next(pokemon);
    } else {
      this.poke2Attack$.next(pokemon);
    }
  }

  change(key: string, pokemon: IPokemon) {
    const ref = this.dialog.open(SwapMeComponent, {
      data: pokemon
    });

    ref.afterClosed().subscribe((newPoke: IPokemon) => {
      if (newPoke) {
        this.eventBus.cast('pokemonChanged', { key, pokemonId: newPoke.id } as IPokemonChanged);
      }
    });
  }
}
