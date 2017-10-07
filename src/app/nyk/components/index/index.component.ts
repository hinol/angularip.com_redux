import {Component, OnInit} from '@angular/core';
import {NYK_ROUTES} from '../../services/nyk-routes';

@Component({
    selector: 'nyk-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class NykIndexComponent implements OnInit {

    public routes = NYK_ROUTES;
    constructor() {
    }

    ngOnInit() {
    }

}
