import { IPokemon } from '../models/pokemon';
import { of } from 'rxjs';
import { IBattle } from '../models/battle';

export function updateBattleState(acc: IBattle, val: IPokemon | { key: string, pokemon: IPokemon } | boolean, index: number) {
  const asPokemon = val as IPokemon;
  const asReplace = val as { key: string, pokemon: IPokemon };
  if (asPokemon?.id === acc.pokemon1.id) {
    acc.pokemon2Hp -= asPokemon?.base.Attack / acc.pokemon2.base.Defense;
    acc.actions.push(`${asPokemon?.name.english} attacked ${acc.pokemon2.name.english} for ${asPokemon?.base.Attack} damage!`);
  } else if (asPokemon?.id === acc.pokemon2.id) {
    acc.pokemon1Hp -= asPokemon?.base.Attack / acc.pokemon1.base.Defense;
    acc.actions.push(`${asPokemon?.name.english} attacked ${acc.pokemon1.name.english} for ${asPokemon?.base.Attack} damage!`);
  } else if (asReplace?.key === 'poke1') {
    acc.actions.push(`${asReplace?.pokemon.name.english} replaced ${acc.pokemon1.name.english}!`);
    acc.pokemon1 = asReplace?.pokemon;
    acc.pokemon1Hp = asReplace?.pokemon.base.HP;
  } else if (asReplace?.key === 'poke2') {
    acc.actions.push(`${asReplace?.pokemon.name.english} replaced ${acc.pokemon2.name.english}!`);
    acc.pokemon2 = asReplace?.pokemon;
    acc.pokemon2Hp = asReplace?.pokemon.base.HP;
  }
  return of(acc);
}
