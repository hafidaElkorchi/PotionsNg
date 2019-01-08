import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PotionsComponent } from '../potions/potions.component';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { Ingredient } from '../models/ingredient';
import { ingreds } from '../models/ingreds';
import { PotionsService } from '../services/potions.service';



@Component({
  selector: 'app-potion-resume',
  templateUrl: './potion-resume.component.html',
  styleUrls: ['./potion-resume.component.css']
})
export class PotionResumeComponent implements OnInit {
  @Input() potion: Potion ;
  @Output() showDetails = new EventEmitter<Potion>();


  constructor(private _service: PotionsService) {}

  ngOnInit() {
  }

  showDetail(potion: Potion): void {
    this.showDetails.emit(this.potion);
  }

  save(): void {
    this._service.updatePotion(this.potion).subscribe(myPotion => this.potion = myPotion);
    // console.log(this.potion.name);
  }

}
