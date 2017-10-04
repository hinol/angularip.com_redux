import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {LoginFormFactory} from './login.form.factory';
import {FormGroup} from '@angular/forms';
import {TokenService} from '../../../services/token/token.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as token from '../../../actions/token.action';

@Component({
    selector: 'nyk-dialog-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class NykDialogLoginComponent implements OnInit {
    loginForm: FormGroup;
    login: string;
    password: string;
    submitted = false;
    state = '';
    STATE = {
        LOADER: 'loader',
        DEFAULT: ''
    };

    constructor(public dialogRef: MdDialogRef<NykDialogLoginComponent>,
                private tokenService: TokenService,
                private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.loginForm = LoginFormFactory.get();
    }

    tryLogin(data, valid): void {
        this.submitted = true;
        if (valid) {
            this.state = this.STATE.LOADER;
            this.store.dispatch(new token.GetToken(data));
            // this.tokenService.getAuthorizationToken(data.login, data.password).subscribe(
            //     data => {
            //         this.state = this.STATE.DEFAULT;
            //         console.error(data);
            //     }
            // )
        }

    }

    setDefaultData() {
        this.loginForm.get('login').setValue('test-clientid');
        this.loginForm.get('password').setValue('password');
    }
}
