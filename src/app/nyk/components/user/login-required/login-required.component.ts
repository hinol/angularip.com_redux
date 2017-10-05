import {Component, OnInit} from '@angular/core';
import {LoginDialogsService} from '../../dialog/login/login.dialog.service';
import {StateCollection, TokenState} from '../../../reducers/index';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'nyk-user-login-required',
    templateUrl: './login-required.component.html',
    styleUrls: ['./login-required.component.scss']
})
export class NykUserLoginRequiredComponent implements OnInit {
    showLoginForm$: Observable<boolean>;

    constructor(private loginDialogService: LoginDialogsService, private store: Store<StateCollection>) {
        this.showLoginForm$ = this.store.select(TokenState.showLoginForm);

    }

    ngOnInit(): void {
        this.showLoginForm$.filter(v => !v).subscribe(() => this.loginDialogService.close());
    }

    openLoginForm() {
        this.loginDialogService.login().subscribe();
    }
}
