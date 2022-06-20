import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {
  //publicPath = `https://23706190.it.scu.edu.au`;

   publicPath = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  postQuoteSubmission(payload) {
    return this.http.post(`${this.publicPath}/api/quote-submission`, payload)
    .subscribe((data) => data);
  }

  postSignUpSubmission(payload){
    return this.http.post(`${this.publicPath}/api/signup`, payload)
    .subscribe((data) => data);
  }

  postSignIn(payload) {
    return this.http.post(`${this.publicPath}/api/signin`, payload);
  }

  postContactSubmission(payload){
    return this.http.post(`${this.publicPath}/api/contact`, payload)
  }

  getContactExtraction() {
    return this.http.get(`${this.publicPath}/api/contact-details`);
  }

  getQuotes(){
    return this.http.get(`${this.publicPath}/api/quote-list`);
  }

  getSignUpDetails(){
    return this.http.get(`${this.publicPath}/api/signup-details`);
  }

}