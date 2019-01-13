import { Component, OnInit, OnDestroy } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { PotionsService } from '../services/potions.service';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit, OnDestroy {
  potionList: Potion[];
  selectedPotion: Potion;

  constructor(private _service: PotionsService) { }

  ngOnInit() {
    this._service.getAll().subscribe(list => this.potionList = list);
    this.selectedPotion = new Potion('','', [])
  }

  ngOnDestroy(): void {
  }

  showThedetail(potion: Potion) {
    this.selectedPotion = potion;
  }

  addPotion(potion:Potion) {
    this.potionList.unshift(potion);    
  }

}

