import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get('.netlify/functions/hello-world');
  }
}
