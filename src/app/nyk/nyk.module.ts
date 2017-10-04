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
import {
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MdToolbarModule
} from '@angular/material';
import {NykDialogLoginComponent} from './components/dialog/login/login.component';
import {reducer} from './reducers';
import {LoginDialogsService} from './components/dialog/login/login.dialog.service';
import {EffectsModule} from '@ngrx/effects';
import {TokenEffects} from './effects/token';

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


        EffectsModule.run(TokenEffects),

    ],
    providers: [
        TokenService,
        LoginDialogsService,
    ],
    exports:
        [
            NykComponent,
        ],
    declarations:
        [NykComponent, NykIndexComponent, NykAccountsComponent, NykDialogLoginComponent],
    entryComponents: [NykDialogLoginComponent]

})

export class NykModule {
}
