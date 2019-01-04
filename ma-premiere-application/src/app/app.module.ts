import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotionsComponent } from './potions/potions.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PotionResumeComponent } from './potion-resume/potion-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    PotionsComponent,
    IngredientsComponent,
    PotionResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
