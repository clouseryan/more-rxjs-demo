import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPokemon } from '../../models/pokemon';
import { PokeService } from '../../poke.service';

@Component({
  selector: 'app-swap-me',
  templateUrl: './swap-me.component.html',
  styleUrls: ['./swap-me.component.scss']
})
export class SwapMeComponent {
  public pokemon: IPokemon[] = [];
  constructor(
    private pokeService: PokeService,
    public dialogRef: MatDialogRef<SwapMeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPokemon) {
    this.pokeService.getPokemon().subscribe(p => this.pokemon = p);
  }

  select(pokemon: IPokemon) {
    this.dialogRef.close(pokemon);
  }

  close() {
    this.dialogRef.close();
  }
}
