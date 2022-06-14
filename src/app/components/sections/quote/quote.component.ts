import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  removals = ['Local resident removal', 'Inter-city removal', 'Inter-state removal'];
  sizes= ['Few things', 'Apartment', 'House','Business','Warehouse','Large equipment'];

  costHour: number;

  quoteForm: FormGroup = new FormGroup({
    'firstName' : new FormControl(null, [Validators.required]) ,
    'lastName' : new FormControl(null, [Validators.required]) ,
    'email' : new FormControl('demo@example.com', [Validators.required]),
    'phone' : new FormControl('ten digits', [Validators.required]),
    'removal' : new FormControl('Local resident removal', [Validators.required]),
    'address' : new FormControl(null, [Validators.required]),
    'suburb' : new FormControl(null, Validators.required),
    'post' : new FormControl(null),
    'date' : new FormControl(null, Validators.required),
    'size' : new FormControl('House',[Validators.required]),
    'destAddress' : new FormControl(null, [Validators.required]),
    'destSuburb' : new FormControl(null, [Validators.required]),
    'destPost' : new FormControl(null, [Validators.required]),
    'destCity' : new FormControl(null, [Validators.required]),
  });;
  constructor(private backend: BackendService) { }

  ngOnInit(){
  }

  get f(){
    return this.quoteForm.controls;
  }

  submit(){
    if(this.quoteForm.status === 'VALID'){
      console.log(this.quoteForm.value);
      const response = this.backend.postQuoteSubmission(this.quoteForm.value);
      console.log(response);
    }
  }

  // setValue(){
  //   this.quoteForm.setValue({firstName: 'Hardik', lastName: 'Savani', email: 'itsolutionstuff@gmail.com', phone: '9191919191', removal: 'Local resident removal', address: '43 bds street', suburb: 'kofiled', post: '1212', date:'2019-02-02', size: 'House', destAddress: '1212 sds', destSuburb: 'asass', destPost: '212', destCity: 'sydney' });
  // }

  // resetValue(){
  //     this.quoteForm.reset({firstName: '', lastName: '', email: '', phone: '', removal: '', address: '', suburb: '', post: '', date:'', size: '', destAddress: '', destSuburb: '', destPost: '', destDate: ''});
  // }

  onCost(event: any){
    // this.costHour= this.initialPrice + this.hourRate*(this.noHour);
     this.costHour = event.target.value* 110 +100;
   }

}
