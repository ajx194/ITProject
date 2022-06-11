import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) { }

  postQuoteSubmission(payload) {
    return this.http.post('http://localhost:3000/api/quote-submission', payload)
    .subscribe((data) => data);
  }

  postSignUpSubmission(payload){
    return this.http.post('http://localhost:3000/api/signup', payload)
    .subscribe((data) => data);
  }

  postSignIn(payload) {
    return this.http.post('http://localhost:3000/api/signin', payload);
  }

  postContactSubmission(payload){
    return this.http.post('http://localhost:3000/api/contact', payload)
  }

  getContactExtraction() {
    return this.http.get('http://localhost:3000/api/contact-details');
  }

  getQuotes(){
    return this.http.get('http://localhost:3000/api/quote-list');
  }

  getSignUpDetails(){
    return this.http.get('http://localhost:3000/api/signup-details');
  }

}