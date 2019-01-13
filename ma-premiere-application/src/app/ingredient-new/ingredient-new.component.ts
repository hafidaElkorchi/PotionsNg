import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ingreds } from 'src/app/models/ingreds';

@Component({
  selector: 'app-ingredient-new',
  templateUrl: './ingredient-new.component.html',
  styleUrls: ['./ingredient-new.component.css']
})
export class IngredientNewComponent implements OnInit {

  @Input() ingredient:Ingredient;
  ingredients = [];

  constructor() { }

  ngOnInit() {
  }

}
