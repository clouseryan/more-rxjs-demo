import { IPokemon } from './pokemon';

export interface IBattle {
  pokemon1: IPokemon;
  pokemon2: IPokemon;

  pokemon1Hp: number;
  pokemon2Hp: number;
  actions: string[];
}
