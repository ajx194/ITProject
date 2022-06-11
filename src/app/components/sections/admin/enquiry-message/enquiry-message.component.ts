import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  inputName: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-enquiry-message',
  templateUrl: './enquiry-message.component.html',
  styleUrls: ['./enquiry-message.component.scss']
})
export class EnquiryMessageComponent implements OnInit {

  displayedColumns: string[] = ['inputName', 'email', 'subject', 'message'];

  dataSource: MatTableDataSource<PeriodicElement>;
  
  constructor(private backend: BackendService) {
  
    this.backend.getContactExtraction()
    .subscribe((data: any) => {
    this.dataSource = new MatTableDataSource(data);
  });
  }
   

  ngOnInit(){
    //call this method on component load
    // this.getEnquiry();
  }
  

}
