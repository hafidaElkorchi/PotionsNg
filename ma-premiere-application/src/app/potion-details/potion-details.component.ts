import { Component, OnInit, Input } from '@angular/core';
import { Potion } from '../models/potion';

@Component({
  selector: 'app-potion-details',
  templateUrl: './potion-details.component.html',
  styleUrls: ['./potion-details.component.css']
})
export class PotionDetailsComponent implements OnInit {
  @Input() potion: Potion;

  constructor() { }

  ngOnInit() {
  }

}
