import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../services/token/token.service';

@Component({
    selector: 'nyk-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class NykIndexComponent implements OnInit {

    constructor(public tokenService: TokenService) {
    }

    ngOnInit() {
        this.tokenService.getAuthorizationToken().subscribe();
    }

}
