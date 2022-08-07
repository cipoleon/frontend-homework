import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BrandsResponse,
  CategoriesResponse,
} from '../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private username = 'user12611';
  private apiKey = '0b8c8b33-a9be-4299-a0bd-0f4878e13cdb';
  constructor(private http: HttpClient) {}

  public getBrands(): Observable<BrandsResponse> {
    return this.http.get<BrandsResponse>(
      'https://size-calculator-api.sspinc.io/brands',
      {
        headers: {
          Authorization: 'Basic ' + btoa(`${this.username}:${this.apiKey}`),
        },
      }
    );
  }

  public getCategories(brandId: string | null): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(
      'https://size-calculator-api.sspinc.io/categories?brand_id=' + brandId,
      {
        headers: {
          Authorization: 'Basic ' + btoa(`${this.username}:${this.apiKey}`),
        },
      }
    );
  }

  public getSizes(data: {
    brand: string | null;
    category: string | null;
    size: string | null;
  }) {
    return this.http.get<CategoriesResponse>(
      'https://size-calculator-api.sspinc.io/sizes?brand_id=' +
        data.brand +
        '&category_id=' +
        data.category +
        '&measurement=' +
        data.size,
      {
        headers: {
          Authorization: 'Basic ' + btoa(`${this.username}:${this.apiKey}`),
        },
      }
    );
  }
}
