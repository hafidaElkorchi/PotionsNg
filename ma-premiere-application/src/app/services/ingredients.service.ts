import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from 'src/app/models/ingredient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Ingredient[]> {
    const url = environment.api_url + '/api/ingredients';
    return this._httpClient.get<Ingredient[]>(url);
  }
}
