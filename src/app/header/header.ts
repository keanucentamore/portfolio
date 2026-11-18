import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitch } from '../language-switch/language-switch';

@Component({
    selector: 'app-header',
    imports: [RouterLink, TranslatePipe, LanguageSwitch],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {}
