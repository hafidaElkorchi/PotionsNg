import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { ingreds } from '../models/ingreds';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredList: Ingredients[];


  constructor() { }

  ngOnInit() {
    this.ingredList = ingreds;
  }

}
