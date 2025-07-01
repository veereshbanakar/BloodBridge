import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface Donor {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  blood_group: string;
  location: string;
  medical_path: string | null;
  is_available: boolean;
  createdAt: string;
}

export interface DonorResponse {
  status: string;
  donors: Donor[];
}

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAllDonors(): Observable<DonorResponse> {
    const headers = this.getAuthHeaders();
    return this.http.get<DonorResponse>(`${this.apiUrl}/get-all-donors`,{ headers });
  }
}