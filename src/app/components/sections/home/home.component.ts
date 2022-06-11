import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BackendService} from '../backend.service';
import { AuthService } from '../auth.service';

declare let require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {
        timing: 3,
        delay: 0,
        a: '3000px',
        b: '-25px',
        c: '10px',
        d: '-5px',
      }
    }))])
  ]
})
export class HomeComponent implements OnInit, AfterContentInit {
  @Input() themeType: string;
  public bounce: number = 1;

  constructor(public dialog: MatDialog, public auth: AuthService ) {
    setInterval(() => {
      this.bounce = this.bounce < 3 ? this.bounce + 1 : 1;
    }, 3000);
  }

    ngOnInit(): void {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      const Parallax = require('parallax-js');
      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, {
        relativeInput: false
      }, );
    }, 2000);
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }



  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:`, result);
      this.auth.isAdmin = result.authenticated;
      console.log(this.auth.isAdmin);
      dialogRef.close();
    });
  }

  openDialogTwo() {
    const dialogRef = this.dialog.open(SignInDialog);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:`, result);
      localStorage.setItem('isAdmin', result.admin);
      this.auth.isAdmin = result.admin;
      this.auth.isAuthenticated = result.authenticated;
      
      localStorage.getItem('isAdmin');
      console.log(this.auth.isAdmin);
    });
  }
}




@Component({
  selector: 'dialog-animations-signup',
  templateUrl: 'home.dialog.html',
})
export class DialogContentDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentDialog>, private backend: BackendService) {}

  signupForm: FormGroup = new FormGroup({
    'email' : new FormControl(null),
    'password' : new FormControl(null),
    'firstName' : new FormControl(null),
    'lastName' : new FormControl(null),
  });
  get f(){
    return this.signupForm.controls;
  }

  signUp(){
    if(this.signupForm.status === 'VALID')
    {
      console.log(this.signupForm.value);
      const signupResponse = this.backend.postSignUpSubmission(this.signupForm.value);
      console.log(signupResponse);
      this.dialogRef.close(signupResponse);
    }
   }
}

@Component({
  selector: 'dialog-animations-signin',
  templateUrl: 'home.signin.html',
})
export class SignInDialog {
  constructor(public dialogRef: MatDialogRef<SignInDialog>, private backend: BackendService) {}

  signInForm: FormGroup = new FormGroup({
    'email' : new FormControl(null, [Validators.email, Validators.required]),
    'password' : new FormControl(null),
  });

  // submit(){
  //   if(this.signInForm.status === 'VALID')
  //   {
  //     console.log(this.signInForm.value);
  //     const signinResponse = this.signinBackend.postSignIn(this.signInForm.value);
  //     console.log(signinResponse);
  //   }
  // }

  get f(){
    return this.signInForm.controls;
  }

  signIn(){
    if(this.signInForm.status === 'VALID') {
      this.backend.postSignIn(this.signInForm.value).subscribe((data) => {
        console.log(data);
        this.dialogRef.close(data);
      });
    }
  }
}
