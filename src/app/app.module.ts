import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NykModule} from './nyk/nyk.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        NykModule,
        RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
