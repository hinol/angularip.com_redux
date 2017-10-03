import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TokenService} from './services/token/token.service';
import {NykIndexComponent} from './components/index/index.component';
import {TokenResolver} from './resolvers/token.resolver';
import {NykAccountsComponent} from './components/accounts/accounts.component';
import {routes} from './routes';
import {NykComponent} from './nyk.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes, {useHash: true}),
        FormsModule
    ],
    providers: [
        TokenService,
        TokenResolver,
    ],
    exports: [
        NykIndexComponent,
    ],
    declarations: [NykComponent, NykIndexComponent, NykAccountsComponent]
})
export class NykModule {
}
