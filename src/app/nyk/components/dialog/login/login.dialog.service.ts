import {Observable} from 'rxjs/Rx';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Injectable} from '@angular/core';
import {NykDialogLoginComponent} from './login.component';

@Injectable()
export class LoginDialogsService {

    constructor(private dialog: MdDialog) {
    }

    public login(): Observable<boolean> {

        let dialogRef: MdDialogRef<NykDialogLoginComponent>;

        dialogRef = this.dialog.open(NykDialogLoginComponent);

        return dialogRef.afterClosed();
    }
}