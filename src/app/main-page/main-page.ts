import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { MyWork } from './my-work/my-work';
import { References } from './references/references';

@Component({
    selector: 'app-main-page',
    imports: [Hero, About, Skills, MyWork, References],
    templateUrl: './main-page.html',
    styleUrl: './main-page.css',
})
export class MainPage {}
