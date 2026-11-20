import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-references',
    imports: [TranslatePipe],
    templateUrl: './references.html',
    styleUrl: './references.css',
})
export class References {
    // quoteKey bleibt leer, bis der echte Text da ist; die Karte zeigt dann nur Name, Rolle und Projekt
    references = [
        {
            name: 'David Peters',
            roleKey: 'references.roles.david',
            projectKey: 'references.projects.bstage',
            quoteKey: '',
        },
        {
            name: 'Lorenz Wagner',
            roleKey: 'references.roles.lorenz',
            projectKey: 'references.projects.staffAlert',
            quoteKey: '',
        },
        {
            name: 'Giuliano Gioia',
            roleKey: 'references.roles.giuliano',
            projectKey: 'references.projects.training',
            quoteKey: '',
        },
    ];
}
