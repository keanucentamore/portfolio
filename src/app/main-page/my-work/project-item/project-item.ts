import { Component, computed, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../../interfaces/project';

@Component({
    selector: 'app-project-item',
    imports: [TranslatePipe],
    templateUrl: './project-item.html',
    styleUrl: './project-item.css',
})
export class ProjectItem {
    sanitizer = inject(DomSanitizer);
    project = input.required<Project>();
    reversed = input(false);
    demoOpen = signal(false);
    demoDialog = viewChild.required<ElementRef<HTMLDialogElement>>('demoDialog');

    // Angular lässt in einem iframe nur ausdrücklich freigegebene Adressen zu.
    // Die Adressen stammen aus den eigenen Projektdaten, deshalb ist die Freigabe hier sicher.
    demoUrl = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(this.project().liveUrl));

    /**
     * Opens the live demo of the project in a window on top of the page.
     */
    openDemo() {
        this.demoOpen.set(true);
        this.demoDialog().nativeElement.showModal();
    }

    /**
     * Closes the demo window.
     */
    closeDemo() {
        this.demoDialog().nativeElement.close();
    }

    /**
     * Runs whenever the dialog closes, also with the Escape key.
     * Removing the iframe stops the demo, so no music keeps playing in the background.
     */
    onDialogClose() {
        this.demoOpen.set(false);
    }

    /**
     * Closes the demo when the dark area next to the window is clicked.
     * Clicks inside the window land on its content, not on the dialog itself.
     * @param event - The click event on the dialog.
     */
    onDialogClick(event: MouseEvent) {
        if (event.target === this.demoDialog().nativeElement) {
            this.closeDemo();
        }
    }
}
