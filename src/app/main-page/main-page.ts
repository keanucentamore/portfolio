import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';

@Component({
    selector: 'app-main-page',
    imports: [Hero, About],
    templateUrl: './main-page.html',
    styleUrl: './main-page.css',
})
export class MainPage {}
