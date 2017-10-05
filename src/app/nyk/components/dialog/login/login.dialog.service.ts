import {Observable} from 'rxjs/Rx';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Injectable} from '@angular/core';
import {NykDialogLoginComponent} from './login.component';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';

@Injectable()
export class LoginDialogsService {
  private showLoginForm$: Observable<boolean>;

  constructor(private dialog: MdDialog, private store: Store<fromRoot.State>) {

    this.showLoginForm$ = this.store.select(fromRoot.getTokenShowLoginForm);
    this.showLoginForm$.subscribe(
      v => {
        if (v) {
          this.login().subscribe();
        }
      }
    );

  }

  public login(): Observable<boolean> {
    let dialogRef: MdDialogRef<NykDialogLoginComponent>;
    dialogRef = this.dialog.open(NykDialogLoginComponent);
    return dialogRef.afterClosed().do(() => {
      this.showLoginForm$.first().subscribe(v => {
        if (v) {
          this.login().subscribe();
        }
      });
    });
  }
}
