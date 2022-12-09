import { Component, Input } from '@angular/core';
import { IBattle } from '../../models/battle';

@Component({
  selector: 'app-battle-display',
  templateUrl: './battle-display.component.html',
  styleUrls: ['./battle-display.component.scss']
})
export class BattleDisplayComponent {
  @Input() battle!: IBattle | null;
}
