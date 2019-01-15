import { Injectable } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Potion[]> {
    const url = environment.api_url + '/api/potions';
    return this._httpClient.get<Potion[]>(url);
  }

  public addPotion(potion: Potion): Observable<Potion> {
    const url = environment.api_url + '/api/potions';
    return this._httpClient.post<Potion>(url, {name:potion.name, effect:potion.effect});
  }

  public updatePotion(potion: Potion): Observable<Potion> {
    const url = environment.api_url + '/api/potions/update';
    return this._httpClient.put<Potion>(url, potion);
  }

  public deletePotion(potion: Potion): Observable<Potion> {
    const url = environment.api_url + '/api/potions/delete/'+ potion.id;
    return this._httpClient.delete<Potion>(url);
  }
}
