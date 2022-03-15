import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { CustomerReadDataSource } from './customer-read-datasource';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Customer>;
  dataSource: CustomerReadDataSource;

  displayedColumns = ['id', 'name', 'age', 'phone', 'action'];

  constructor(private customerService: CustomerService) {
    this.dataSource = new CustomerReadDataSource();
  }

  ngAfterViewInit(): void {
    this.customerService.read().subscribe(customers => {
      this.dataSource.data = customers;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.dataSource.defineCustomSettings();
    });
  }

}
