import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  updateAvailability(isAvailable: boolean): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.patch(`${this.baseUrl}/update-status?requestId=6865177d4eabd28a32fdd3b3&status=ACCEPTED`,{headers});
  }



}
