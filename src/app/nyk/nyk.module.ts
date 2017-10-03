import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TokenService} from './services/token.service';
import {NykIndexComponent} from './components/index/index.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule, HttpModule, RouterModule, FormsModule
    ],
    providers: [
        TokenService,
    ],
    exports: [
        NykIndexComponent
    ],
    declarations: [NykIndexComponent]
})
export class NykModule {
}
