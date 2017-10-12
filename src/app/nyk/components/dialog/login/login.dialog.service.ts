import {Observable} from 'rxjs/Rx';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Injectable} from '@angular/core';
import {NykDialogLoginComponent} from './login.component';

@Injectable()
export class LoginDialogsService {
    private showLoginForm$: Observable<boolean>;

    constructor(private dialog: MatDialog) {
    }

    public login(): Observable<boolean> {
        const config: MatDialogConfig = {
            width: '600px',
            disableClose: true
        };
        return this.dialog.open(NykDialogLoginComponent, config).afterClosed();
    }

    public close() {
        return this.dialog.closeAll();
    }
}
