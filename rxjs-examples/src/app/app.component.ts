import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokeService } from './poke.service';
import { connect, merge, mergeScan, Observable, of, ReplaySubject } from 'rxjs';
import { IPokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
