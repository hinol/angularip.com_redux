import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NykModule} from './nyk/nyk.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        NykModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
