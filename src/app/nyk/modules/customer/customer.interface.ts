export interface CustomerInterface {
    cprCvr: string;
    firstName: string;
    lastName: string;
}

export interface CustomerResponseInterface {
    _embedded: {
        customers: CustomerInterface[]
    };
}