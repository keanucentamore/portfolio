import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    imports: [TranslatePipe],
    templateUrl: './skills.html',
    styleUrl: './skills.css',
})
export class Skills {
    skills = [
        { name: 'Angular', icon: 'angular_icon.svg' },
        { name: 'TypeScript', icon: 'typescript_icon.svg' },
        { name: 'JavaScript', icon: 'javascript_icon.svg' },
        { name: 'HTML', icon: 'html_icon.svg' },
        { name: 'Scrum', icon: 'scrum_icon.svg' },
        { name: 'Supabase', icon: 'supabase_icon.svg' },
        { name: 'Git', icon: 'git_icon.svg' },
        { name: 'CSS', icon: 'css_icon.svg' },
        { name: 'REST-API', icon: 'rest_api_icon.svg' },
        { name: 'Higgsfield', icon: 'higgsfield_icon.svg' },
        { name: 'Adobe CC', icon: 'adobe_cc_icon.webp' },
    ];
}
