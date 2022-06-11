import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from '../../backend.service';

export interface PeriodicElement {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
  removal: string,
  address: string,
  suburb: string,
  post: string,
  date: string,
  size: string,
  destAddress: string,
  destSuburb: string,
  destPost: string,
  desCity: string
  }

@Component({
  selector: 'app-quote-requests',
  templateUrl: './quote-requests.component.html',
  styleUrls: ['./quote-requests.component.scss']
})
export class QuoteRequestsComponent {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'removal', 'address', 'suburb', 'post', 'date', 'size', 'destAddress', 'destSuburb', 'destPost', 'destCity' ];

  dataSource: MatTableDataSource<PeriodicElement>;
  
  constructor(private backend: BackendService) {
  
    this.backend.getQuotes()
    .subscribe((data: any) => {
    this.dataSource = new MatTableDataSource(data);
    });
  }
}
