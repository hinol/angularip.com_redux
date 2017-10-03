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
import {NykComponent} from './nyk.component';
import {routes} from './routes';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    providers: [
        TokenService,
        TokenResolver,
    ],
    exports: [
        NykComponent,
    ],
    declarations: [NykComponent, NykIndexComponent, NykAccountsComponent]
})
export class NykModule {
}
