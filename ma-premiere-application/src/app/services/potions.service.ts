import { Injectable } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Potion[]> {
    const url = 'https://e9ce18a4-365c-48a7-97d8-456c72d4100c.mock.pstmn.io/api/potions';
    return this._httpClient.get<Potion[]>(url);
  }

  public updatePotion(potion: Potion): Observable<Potion> {
    const url2 = 'https://432979dc-894a-4fc7-8610-931acea9ca98.mock.pstmn.io/api/potions';
    return this._httpClient.put<Potion>(url2, potion);
  }
}
