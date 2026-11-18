import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../../header/header';

@Component({
    selector: 'app-hero',
    imports: [Header, TranslatePipe],
    templateUrl: './hero.html',
    styleUrl: './hero.css',
})
export class Hero {}
