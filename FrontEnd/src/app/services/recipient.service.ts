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
export interface RequestResponse {
  status: string;
  requests: Request[];
}
export interface Request {
  id: string,
  receiverId: string,
  receiverName: string,
  bloodGroup: string,
  urgencyLevel: string,
  hospitalName: string,
  hospitalAddress: string,
  contactNumber: number,
  reason: string,
  status: string,
  acceptedBy: string
}

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
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
    console.log("anish error--"+ headers);

    return this.http.get<DonorResponse>(`${this.apiUrl}/get-all-donors`,{ headers });
  }

  getAllRequestsByRecipient(): Observable<RequestResponse> {
    const headers = this.getAuthHeaders();
    return this.http.get<RequestResponse>(`${this.apiUrl}/viewallrequest`,{ headers })
  }
}