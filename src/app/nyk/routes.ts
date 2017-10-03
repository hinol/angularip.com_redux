import {Routes} from '@angular/router';
import {NykIndexComponent} from './components/index/index.component';
import {NykAccountsComponent} from './components/accounts/accounts.component';
import {NykComponent} from './nyk.component';
import {TokenResolver} from './resolvers/token.resolver';

export const routes: Routes = [
    {
        path: '',
        component: NykComponent,
        resolve: {
            token: TokenResolver
        },
        children: [
            {
                path: '',
                component: NykIndexComponent,
            },
            {
                path: 'accounts',
                component: NykAccountsComponent,
            },
        ]
    },
    {
        path: '**',
        component: NykIndexComponent
    }
];
