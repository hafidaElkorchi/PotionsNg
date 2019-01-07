import { Component, OnInit, Input, Output } from '@angular/core';
import { PotionsComponent } from '../potions/potions.component';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { Ingredient } from '../models/ingredient';
import { ingreds } from '../models/ingreds';



@Component({
  selector: 'app-potion-resume',
  templateUrl: './potion-resume.component.html',
  styleUrls: ['./potion-resume.component.css']
})
export class PotionResumeComponent implements OnInit {
  @Input() potion: Potion ;


  constructor() {}

  ngOnInit() {
  }

  showDetail(potion: Potion): void {

  }

}
