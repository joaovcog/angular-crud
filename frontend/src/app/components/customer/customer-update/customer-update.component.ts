import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer = new Customer();

  constructor(private customerService: CustomerService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.customerService.readById(+id!).subscribe(customer => {
      this.customer = customer;
    })
  }

  updateCustomer(): void {
    this.customerService.update(this.customer).subscribe(() => {
      this.customerService.showMessage('Cliente atualizado com sucesso!');
      this.router.navigate(['/customers']);
    })
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }

}
