import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class LoginFormFactory {
    static get(): FormGroup {
        return (new FormBuilder()).group({
            login: ['', [
                <any>Validators.required,
                <any>Validators.minLength(5),
            ]],
            password: ['', [
                <any>Validators.required,
                <any>Validators.minLength(5)
            ]],
        });
    }
}