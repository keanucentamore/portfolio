import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
    providedIn: 'root',
})
export class Projects {
    projects: Project[] = [
        {
            name: 'Join',
            technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
            descriptionKey: 'projects.join',
            image: 'join.png',
            liveUrl: '',
            githubUrl: 'https://github.com/keanucentamore',
        },
        {
            name: 'Pollo Loco',
            technologies: 'JavaScript | HTML | CSS',
            descriptionKey: 'projects.polloLoco',
            image: 'pollo_loco.png',
            liveUrl: '',
            githubUrl: 'https://github.com/keanucentamore',
        },
        {
            name: 'DA Bubble',
            technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
            descriptionKey: 'projects.daBubble',
            image: 'da_bubble.png',
            liveUrl: '',
            githubUrl: 'https://github.com/keanucentamore',
        },
        {
            name: 'Pokédex',
            technologies: 'JavaScript | HTML | CSS | Api',
            descriptionKey: 'projects.pokedex',
            image: 'pokedex.png',
            liveUrl: '',
            githubUrl: 'https://github.com/keanucentamore',
        },
    ];
}
