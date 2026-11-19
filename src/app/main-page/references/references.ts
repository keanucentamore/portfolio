import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-references',
    imports: [TranslatePipe],
    templateUrl: './references.html',
    styleUrl: './references.css',
})
export class References {
    references = [
        { name: 'James Rugman', project: 'Join', quoteKey: 'references.james' },
        { name: 'Evelyn Marx', project: 'DA Bubble', quoteKey: 'references.evelyn' },
        { name: 'Noah Müller', project: 'Pollo Loco', quoteKey: 'references.noah' },
    ];
}
