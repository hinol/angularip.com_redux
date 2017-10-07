import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenService} from './services/token/token.service';
import {NykIndexComponent} from './components/index/index.component';
import {NykAccountsComponent} from './components/accounts/accounts.component';
import {NykComponent} from './nyk.component';
import {routes} from './routes';

import {StoreModule} from '@ngrx/store';
import {NykDialogLoginComponent} from './components/dialog/login/login.component';
import {reducer} from './redux/reducers';
import {LoginDialogsService} from './components/dialog/login/login.dialog.service';
import {EffectsModule} from '@ngrx/effects';
import {TokenEffects} from './redux/effects/token';
import {NykUserLoginRequiredComponent} from './components/user/login-required/login-required.component';
import {LocalStorageModule} from 'angular-2-local-storage';
import {AccountService} from './modules/account/account.service';
import {AccountEffects} from './redux/effects/account';
import {ApiService} from './services/api/api.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NykAccountSingleComponent} from './components/accounts/single/single.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MdToolbarModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore(reducer),

        MdToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTableModule,

        StoreDevtoolsModule.instrumentOnlyWithExtension(),

        EffectsModule.run(TokenEffects),
        EffectsModule.run(AccountEffects),

        LocalStorageModule.withConfig({
            prefix: 'nyk',
            storageType: 'localStorage'
        })

    ],
    providers: [
        TokenService,
        LoginDialogsService,
        AccountService,
        ApiService,
    ],
    exports:
        [
            NykComponent,
        ],
    declarations:
        [
            NykComponent, NykIndexComponent, NykAccountsComponent, NykDialogLoginComponent,
            NykUserLoginRequiredComponent, NykAccountSingleComponent
        ],
    entryComponents: [
        NykDialogLoginComponent
    ]

})

export class NykModule {
}
