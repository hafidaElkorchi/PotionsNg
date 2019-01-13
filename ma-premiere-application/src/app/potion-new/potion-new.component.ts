import { Component, Output, Input, OnInit } from '@angular/core';
import { Potion } from 'src/app/models/potion';
import { EventEmitter } from '@angular/core';
import { ingreds } from 'src/app/models/ingreds';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-potion-new',
  templateUrl: './potion-new.component.html',
  styleUrls: ['./potion-new.component.css']
})
export class PotionNewComponent implements OnInit {

  @Output() newPotion = new EventEmitter<Potion>();
  potion:Potion

  ingredients:Ingredient[] = ingreds

  constructor() { }

  ngOnInit() {
    this.potion = new Potion('','',[])
  }

  addPotion() {
    let potion = new Potion(this.potion.name, this.potion.effect, this.potion.ingredients)
    this.newPotion.emit(potion)
    this.potion = new Potion('','',[])
  }

  addIngredient() {
    this.potion.ingredients.push(new Ingredient("", 0))
  }

}
