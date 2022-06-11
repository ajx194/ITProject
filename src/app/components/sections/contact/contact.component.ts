import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm: FormGroup = new FormGroup({
    'inputName' : new FormControl(null, [Validators.required]) ,
    'email' : new FormControl('demo@example.com', [Validators.required]),
    'subject' : new FormControl(null, [Validators.required]) ,
    'message' : new FormControl(null),
    
  });;

  constructor(private backend: BackendService) { }

  get f(){
    return this.contactForm.controls;
  }

  submit(){
    if(this.contactForm.status === 'VALID'){
      
      this.backend.postContactSubmission(this.contactForm.value).subscribe((data) => {
      console.log(data);

    });
  }
  }
}
