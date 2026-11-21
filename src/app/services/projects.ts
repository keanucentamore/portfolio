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
            image: 'join.webp',
            liveUrl: '',
            githubUrl: 'https://github.com/keanucentamore',
        },
        {
            name: 'El Pollo Loco',
            technologies: 'JavaScript | HTML | CSS | Canvas',
            descriptionKey: 'projects.polloLoco',
            image: 'pollo_loco.webp',
            liveUrl: 'https://pollo-loco.keanucentamore.de',
            githubUrl: 'https://github.com/keanucentamore/EL_POLLO_LOCO_FINAL',
        },
        {
            name: 'Pokédex',
            technologies: 'JavaScript | HTML | CSS | API',
            descriptionKey: 'projects.pokedex',
            image: 'pokedex.webp',
            liveUrl: 'https://pokedex.keanucentamore.de',
            githubUrl: 'https://github.com/keanucentamore/Pokedex',
        },
    ];
}
