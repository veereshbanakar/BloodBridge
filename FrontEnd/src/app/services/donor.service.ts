import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';



export interface BloodRequest {
  id: string;
  receiverId: string;
  receiverName: string;
  bloodGroup: string;
  urgencyLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | string;
  hospitalName: string;
  hospitalAddress: string;
  contactNumber: string;
  reason: string;
  status: string;
  acceptedBy: string | null;
}
export interface RequestResponse {
  status: string;
  donorSpecificRequests: BloodRequest[];
}
export interface UpdateProfileData {
  name: string;
  email: string;
  age: number;
  blood_group: string;
  phone: string;
  location: string;
}

export interface UpdateProfileResponse {
  status: string;
  message: string;
}

export interface acceptRequestResponse{
  status: string,
  message: string
}

export interface DonorResponse {
  id: string;
  donorId: string;
  requestId: string;
  receiverName: string;
  bloodGroup: string;
  hospitalName: string;
  acceptedAt: string; // ISO Date string
  reason: string;
  urgencyLavel: string;
  hospitalAddress: string;
}

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
    return this.http.get(`${this.baseUrl}/update-availability?isAvailable=${isAvailable}`,{headers});
  }

  getRequestsForDonor(): Observable<RequestResponse>{
    const headers = this.getAuthHeaders();
    return this.http.get<RequestResponse>(`${this.baseUrl}/get-all-request`,{headers});
  }
  updateProfile(profileData: UpdateProfileData): Observable<UpdateProfileResponse> {
    const headers = this.getAuthHeaders();
    return this.http.patch<UpdateProfileResponse>(`${this.baseUrl}/update-profile`, profileData, {headers});
  }
  acceptRequest(requestId: string):Observable<acceptRequestResponse>{
    const headers = this.getAuthHeaders();
    return this.http.get<acceptRequestResponse>(`${this.baseUrl}/update-status?requestId=${requestId}&status=ACCEPTED`,{headers});
  }
  getDonorResponses(): Observable<DonorResponse[]>{
    const headers = this.getAuthHeaders();
    return this.http.get<DonorResponse[]>(`${this.baseUrl}/accepted-requests`,{headers});
  }
  cancelRequest(requestId: string):Observable<acceptRequestResponse>{
    const headers = this.getAuthHeaders();
    return this.http.get<acceptRequestResponse>(`${this.baseUrl}/update-status?requestId=${requestId}&status=CANCEL`, {headers});
  }
}
