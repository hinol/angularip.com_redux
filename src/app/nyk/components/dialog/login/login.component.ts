import {Component, OnInit} from '@angular/core';
import {LoginFormFactory} from './login.form.factory';
import {FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as token from '../../../redux/actions/token';
import {Observable} from 'rxjs/Observable';
import {StateCollection, TokenState} from '../../../redux/reducers/index';

@Component({
    selector: 'nyk-dialog-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class NykDialogLoginComponent implements OnInit {
    tokenExpire$: Observable<number>;
    loginProcess$: Observable<boolean>;
    tokenLoginProcess$: Observable<boolean>;
    loginForm: FormGroup;
    login: string;
    password: string;
    submitted = false;
    state = '';
    STATE = {
        LOADER: 'loader',
        DEFAULT: ''
    };

    constructor(private store: Store<StateCollection>) {
        this.loginProcess$ = store.select(TokenState.getTokenLoginProcess);
        this.tokenExpire$ = this.store.select(TokenState.getTokenExpire);
    }

    ngOnInit() {
        this.loginForm = LoginFormFactory.get();
    }

    tryLogin(data, valid): void {
        this.submitted = true;
        if (valid) {
            this.store.dispatch(new token.GetToken(data));
        }
    }

    setDefaultData() {
        this.loginForm.get('login').setValue('test-clientid');
        this.loginForm.get('password').setValue('password');
    }
}
