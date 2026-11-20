import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitch } from '../language-switch/language-switch';

@Component({
    selector: 'app-header',
    imports: [RouterLink, TranslatePipe, LanguageSwitch],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    menuOpen = signal(false);

    /**
     * Opens the mobile menu when it is closed and closes it when it is open.
     */
    toggleMenu() {
        this.menuOpen.set(!this.menuOpen());
    }

    /**
     * Closes the mobile menu.
     */
    closeMenu() {
        this.menuOpen.set(false);
    }
}
