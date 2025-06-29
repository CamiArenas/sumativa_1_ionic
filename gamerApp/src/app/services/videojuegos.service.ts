import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideojuegosService {
  private apiUrl = 'https://www.cheapshark.com/api/1.0/deals';

  constructor(private http: HttpClient) {}

  buscarJuegos(titulo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?title=${titulo}`);
  }
}
