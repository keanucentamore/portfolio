import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-privacy-policy',
    imports: [Header, Footer, TranslatePipe, RouterLink],
    templateUrl: './privacy-policy.html',
    styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {}
