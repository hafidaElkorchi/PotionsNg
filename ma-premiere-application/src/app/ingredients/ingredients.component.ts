import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ingreds } from '../models/ingreds';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredList: Ingredient[];


  constructor() { }

  ngOnInit() {
    this.ingredList = ingreds;
  }

}
