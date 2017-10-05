import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {LoginFormFactory} from './login.form.factory';
import {FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as token from '../../../actions/token';
import {Observable} from 'rxjs/Observable';

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
    constructor(private store: Store<fromRoot.StateCollection>) {
        this.loginProcess$ = store.select(fromRoot.getTokenLoginProcess);
        this.tokenExpire$ = this.store.select(fromRoot.getTokenExpire);
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
