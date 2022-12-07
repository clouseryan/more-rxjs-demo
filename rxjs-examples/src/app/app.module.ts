import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatLineModule } from '@angular/material/core';
import { MatLegacyLineModule } from '@angular/material/legacy-core';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';
import { NgEventBus } from 'ng-event-bus';
import { MatDialogModule } from '@angular/material/dialog';
import { SwapMeComponent } from './battle/swap-me/swap-me.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    HomeComponent,
    BattleComponent,
    SwapMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatLineModule,
    MatIconModule,
    MatLegacyLineModule,
    MatDialogModule
  ],
  providers: [
    NgEventBus
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
