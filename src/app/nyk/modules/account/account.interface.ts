export interface AccountInterface {
    regNo: string;
    accountNo: string;
    name: string;

}


export interface AccountResponseInterface {
    _embedded: {
        accounts: AccountInterface[]
    };
};
