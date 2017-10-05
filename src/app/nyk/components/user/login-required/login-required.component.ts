import {Component} from '@angular/core';
import {LoginDialogsService} from '../../dialog/login/login.dialog.service';

@Component({
    selector: 'nyk-user-login-required',
    templateUrl: './login-required.component.html',
    styleUrls: ['./login-required.component.scss']
})
export class NykUserLoginRequiredComponent {

    constructor(private loginDialogService: LoginDialogsService) {
    }

    openLoginForm() {
        this.loginDialogService.login().subscribe();
    }
}
