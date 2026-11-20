import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-legal-notice',
    imports: [Header, Footer, TranslatePipe, RouterLink],
    templateUrl: './legal-notice.html',
    styleUrl: './legal-notice.css',
})
export class LegalNotice {}
