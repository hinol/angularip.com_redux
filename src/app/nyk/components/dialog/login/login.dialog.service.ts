import {Observable} from 'rxjs/Rx';
import {MdDialog, MdDialogConfig} from '@angular/material';
import {Injectable} from '@angular/core';
import {NykDialogLoginComponent} from './login.component';

@Injectable()
export class LoginDialogsService {
    private showLoginForm$: Observable<boolean>;

    constructor(private dialog: MdDialog) {
    }

    public login(): Observable<boolean> {
        const config: MdDialogConfig = {
            width: '600px'
        };
        return this.dialog.open(NykDialogLoginComponent, config).afterClosed();
    }
}
