import {Routes} from '@angular/router';
import {NykIndexComponent} from './components/index/index.component';
import {NykAccountsComponent} from './components/accounts/accounts.component';
import {NykComponent} from './nyk.component';
import {NYK_ROUTES} from './services/nyk-routes';
import {NykCustomersComponent} from './components/customers/customers.component';
import {NykAccountSingleFullComponent} from './components/accounts/single-full/single-full.component';

export const routes: Routes = [
    {
        path: '',
        component: NykComponent,
        children: [
            {
                path: '',
                component: NykIndexComponent,
            },
            {
                path: NYK_ROUTES.ACCOUNT_LIST,
                component: NykAccountsComponent,
            },
            {
                path: NYK_ROUTES.ACCOUNT_SINGLE,
                component: NykAccountSingleFullComponent,
            },
            {
                path: NYK_ROUTES.CUSTOMER_LIST,
                component: NykCustomersComponent,
            },
        ]
    },
    {
        path: '**',
        component: NykIndexComponent
    }
];
