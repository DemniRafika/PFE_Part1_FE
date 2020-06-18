import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  private baseUrl = 'http://localhost:8080/api/v1/trades';

  constructor(private http: HttpClient) { }

  getTrade(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrade(trade: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, trade);
  }

  updateTrade(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTrade(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTradesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
