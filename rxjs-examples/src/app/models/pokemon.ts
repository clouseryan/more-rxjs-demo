export interface IPokemon {
  id: number;
  name: { english: string, japanese: string, chinese: string };
  base: { HP: number, Attack: number, Defense: number, Speed: number, SPAttack: number, SPDefences: number };
  type: string[];
}
