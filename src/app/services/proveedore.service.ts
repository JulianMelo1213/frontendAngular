import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedore } from '../models/proveedore';

@Injectable({
  providedIn: 'root'
})
export class ProveedoreService {
  private apiUrl = 'http://localhost:5119/api/Proveedores';  // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<Proveedore[]> {
    return this.http.get<Proveedore[]>(this.apiUrl);
  }

  getProveedore(id: number): Observable<Proveedore> {
    return this.http.get<Proveedore>(`${this.apiUrl}/${id}`);
  }

  createProveedore(proveedore: Proveedore): Observable<Proveedore> {
    return this.http.post<Proveedore>(this.apiUrl, proveedore);
  }

  updateProveedore(id: number, proveedore: Proveedore): Observable<Proveedore> {
    return this.http.put<Proveedore>(`${this.apiUrl}/${id}`, proveedore);
  }

  deleteProveedore(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
