import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IPokemon } from '../models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PokeCardComponent {
  @Input() pokemon!: IPokemon;
  @Input() public showActions: boolean = false;

  @Output() damage = new EventEmitter<number>();
  @Output() change = new EventEmitter<IPokemon>();
  doDamage() {
    this.damage.emit(this.pokemon.base.Attack);
  }

  changeMe() {
    this.change.emit(this.pokemon);
  }
}
