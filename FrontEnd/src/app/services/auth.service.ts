import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environment/environment';

// Interface for login request
export interface LoginRequest {
  email: string;
  password: string;
  role: string;
}

// Interface for user data (can be donor or receiver)
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  phone: string;
  location: string;
  createdAt: string;
}

// Interface for login response
export interface LoginResponse {
  token: string;
  receiver?: User;  // for recipient login
  donor?: User;     // for donor login (if different structure)
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);

  public currentUser$ = this.currentUserSubject.asObservable();
  public token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check if user is already logged in on service initialization
    this.loadUserFromStorage();
  }

  // Login method
  loginReciever(loginData: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login-receiver`, loginData, { headers })
      .pipe(
        map(response => {
          if (response.status === 'success' && response.token) {
            // Store token
            this.setToken(response.token);
            
            // Store user data based on role
            const userData = response.receiver || response.donor;
            if (userData) {
              this.setCurrentUser(userData);
              this.storeUserData(userData, response.token, loginData.role);
            }
          }
          return response;
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }
  loginDonor(loginData: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login-donor`, loginData, { headers })
      .pipe(
        map(response => {
          if (response.status === 'success' && response.token) {
            // Store token
            this.setToken(response.token);
            
            // Store user data based on role
            const userData = response.receiver || response.donor;
            if (userData) {
              this.setCurrentUser(userData);
              this.storeUserData(userData, response.token, loginData.role);
            }
          }
          return response;
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  // Logout method
  logout(): void {
    this.clearStorage();
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Get token
  getToken(): string | null {
    return this.tokenSubject.value || localStorage.getItem('token');
  }

  // Get user role
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  // Private methods
  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  private setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  private storeUserData(user: User, token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('userRole', role);
  }

  private loadUserFromStorage(): void {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('currentUser');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.tokenSubject.next(token);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        this.clearStorage();
      }
    }
  }

  private clearStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
  }

  // Method to get authorization headers for API calls
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }
}