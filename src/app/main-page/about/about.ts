import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    imports: [TranslatePipe],
    templateUrl: './about.html',
    styleUrl: './about.css',
})
export class About {
    slides = ['about.text1', 'about.text2', 'about.text3'];
    currentSlide = signal(0);

    /**
     * Shows the text with the given position in the slider.
     * @param index - Position of the text, starting at 0.
     */
    showSlide(index: number) {
        this.currentSlide.set(index);
    }

    /**
     * Shows the next text, after the last one the slider starts again with the first.
     */
    nextSlide() {
        this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
    }

    /**
     * Shows the previous text, before the first one the slider jumps to the last.
     */
    previousSlide() {
        this.currentSlide.set((this.currentSlide() - 1 + this.slides.length) % this.slides.length);
    }
}
