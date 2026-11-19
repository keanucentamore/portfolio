import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Projects } from '../../services/projects';
import { ProjectItem } from './project-item/project-item';

@Component({
    selector: 'app-my-work',
    imports: [ProjectItem, TranslatePipe],
    templateUrl: './my-work.html',
    styleUrl: './my-work.css',
})
export class MyWork {
    projectsService = inject(Projects);
}
