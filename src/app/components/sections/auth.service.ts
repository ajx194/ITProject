import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAdmin: boolean = false;
    isAuthenticated: boolean = false;
    constructor() {
        this.isAdmin = localStorage.getItem('isAdmin') as unknown as boolean;

        this.isAuthenticated = localStorage.getItem('isAuthenticated') as unknown as boolean;
    }
}


