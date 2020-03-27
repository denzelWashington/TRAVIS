import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {

    constructor(private authService: AuthService) { }

    logout() {
        this.authService.logout();
    }

}
