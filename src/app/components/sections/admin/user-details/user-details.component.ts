import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from '../../backend.service';

export interface PeriodicElement {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent{

  displayedColumns: string[] = ['email', 'password', 'firstName', 'lastName'];

  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private backend: BackendService) {
  
    this.backend.getSignUpDetails()
    .subscribe((data: any) => {
    this.dataSource = new MatTableDataSource(data);
  });
  }

}
