import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../../interfaces/project';

@Component({
    selector: 'app-project-item',
    imports: [TranslatePipe],
    templateUrl: './project-item.html',
    styleUrl: './project-item.css',
})
export class ProjectItem {
    project = input.required<Project>();
    reversed = input(false);
}
