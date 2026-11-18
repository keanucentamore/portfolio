import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language-switch',
    imports: [],
    templateUrl: './language-switch.html',
    styleUrl: './language-switch.css',
})
export class LanguageSwitch {
    translate = inject(TranslateService);

    /**
     * Switches all texts of the page to the given language.
     * @param lang - The language code, 'de' or 'en'.
     */
    switchLanguage(lang: string) {
        this.translate.use(lang);
    }
}
