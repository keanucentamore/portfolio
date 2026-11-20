import { Component, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language-switch',
    imports: [],
    templateUrl: './language-switch.html',
    styleUrl: './language-switch.css',
})
export class LanguageSwitch {
    translate = inject(TranslateService);
    title = inject(Title);
    inMenu = input(false);

    /**
     * Switches all texts of the page and the title in the browser tab to the given language.
     * @param lang - The language code, 'de' or 'en'.
     */
    switchLanguage(lang: string) {
        // Erst wenn die Sprachdatei geladen ist, steht der übersetzte Titel bereit
        this.translate.use(lang).subscribe(() => {
            this.title.setTitle(this.translate.instant('meta.title'));
        });
        // Sagt Browser und Screenreader, in welcher Sprache die Seite gerade ist
        document.documentElement.lang = lang;
    }
}
