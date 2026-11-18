import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';

@Component({
    selector: 'app-main-page',
    imports: [Hero, About, Skills],
    templateUrl: './main-page.html',
    styleUrl: './main-page.css',
})
export class MainPage {}
