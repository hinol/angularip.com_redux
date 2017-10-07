import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs/Observable';
import {CustomerInterface, CustomerResponseInterface} from './customer.interface';

@Injectable()
export class CustomerService {

    constructor(private api: ApiService) {

    }

    public getList(): Observable<CustomerInterface[]> {
        return this.api.get('customers')
            .map((response: CustomerResponseInterface) => response._embedded.customers);
    }
}