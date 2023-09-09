import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  baseUrl = "http://localhost:8082";

  constructor(private http: HttpClient) { }

  getAllPlayer(): any {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  createPlayer(player: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  

  getOnePlayer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
}
