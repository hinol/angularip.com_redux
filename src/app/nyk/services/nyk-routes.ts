export const NYK_ROUTES = {
    CUSTOMER_LIST: 'customers',
    ACCOUNT_LIST: 'accounts',
    CUSTOMER_SINGLE: 'customers/:customerCode',
    ACCOUNT_SINGLE: 'accounts/:accountCode'
};


export const NYK_ROUTES_SLASH = {
    CUSTOMER_LIST: '/' + NYK_ROUTES.CUSTOMER_LIST,
    ACCOUNT_LIST: '/' + NYK_ROUTES.ACCOUNT_LIST,
    CUSTOMER_SINGLE: '/' + NYK_ROUTES.CUSTOMER_SINGLE,
    ACCOUNT_SINGLE: '/' + NYK_ROUTES.ACCOUNT_SINGLE,
};
