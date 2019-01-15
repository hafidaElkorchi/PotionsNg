import { Component, Output, Input, OnInit } from '@angular/core';
import { Potion } from 'src/app/models/potion';
import { EventEmitter } from '@angular/core';
//import { ingreds } from 'src/app/models/ingreds';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-potion-new',
  templateUrl: './potion-new.component.html',
  styleUrls: ['./potion-new.component.css']
})
export class PotionNewComponent implements OnInit {

  @Output() newPotion = new EventEmitter<Potion>();
  potion:Potion
  ingredients = []

  constructor(private _service: IngredientsService) { }

  ngOnInit() {
    this.potion = new Potion('','',[]);
    
    this._service.getAll().subscribe(ingreds => {
      console.log(ingreds)
      ingreds.forEach(ing => {
        this.ingredients.push({ ing : ing, pick: false });
      })
    });
  }

  addPotion() {
    let ingredients = []
    this.ingredients.forEach(ing => {
        if(ing.pick) ingredients.push(ing.ing);
        ing.pick = false
    })

    let potion = new Potion(this.potion.name, this.potion.effect, ingredients)
    this.newPotion.emit(potion)
    this.potion = new Potion('','',[])
  }

  addIngredient() {
    this.potion.ingredients.push(new Ingredient("", 0))
  }

}
