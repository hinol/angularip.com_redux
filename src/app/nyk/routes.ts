import {Routes} from '@angular/router';
import {NykIndexComponent} from './components/index/index.component';
import {NykAccountsComponent} from './components/accounts/accounts.component';

export const routes: Routes = [
    {
        path: '/',
        component: NykIndexComponent
    },
    {
        path: '/accounts',
        component: NykAccountsComponent,
    },
    {
        path: '**',
        component: NykIndexComponent
    }
];
