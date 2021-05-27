import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, PokemonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
