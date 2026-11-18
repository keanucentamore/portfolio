import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [RouterLink, TranslatePipe],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {}
