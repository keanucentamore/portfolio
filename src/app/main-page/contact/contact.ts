import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact {
    contactForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
        ]),
        message: new FormControl('', [Validators.required, Validators.minLength(10)]),
        privacy: new FormControl(false, Validators.requiredTrue),
    });

    sendStatus = signal('idle');

    /**
     * Returns the name field of the contact form.
     */
    get name() {
        return this.contactForm.get('name');
    }

    /**
     * Returns the email field of the contact form.
     */
    get email() {
        return this.contactForm.get('email');
    }

    /**
     * Returns the message field of the contact form.
     */
    get message() {
        return this.contactForm.get('message');
    }

    /**
     * Returns the privacy checkbox of the contact form.
     */
    get privacy() {
        return this.contactForm.get('privacy');
    }

    /**
     * Sends the form data to the mail endpoint and shows whether it worked.
     */
    async onSubmit() {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }
        this.sendStatus.set('sending');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.contactForm.value),
            });
            if (!response.ok) {
                throw new Error('Mail could not be sent');
            }
            this.sendStatus.set('success');
            this.contactForm.reset();
        } catch (error) {
            this.sendStatus.set('error');
        }
    }
}
