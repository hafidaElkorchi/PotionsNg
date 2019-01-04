import { Component, OnInit, OnDestroy } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit, OnDestroy {
  potionList: Potion[];

  constructor() { }

  ngOnInit() {
    this.potionList = potions;

  }

  ngOnDestroy(): void {
  }

}

