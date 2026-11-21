/**
 * Cloudflare Worker for the portfolio.
 * Serves the built Angular app and handles the contact form at POST /api/contact.
 */

const SENDER = { email: 'contact@keanucentamore.de', name: 'Portfolio Keanu Centamore' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export default {
    async fetch(request, env): Promise<Response> {
        const url = new URL(request.url);
        if (url.pathname === '/api/contact') {
            if (request.method !== 'POST') {
                return jsonResponse({ error: 'Method not allowed' }, 405);
            }
            return handleContact(request, env);
        }
        return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<Env>;

/**
 * Checks the form data and forwards the message by email.
 * @param request - The POST request from the contact form.
 * @param env - Bindings and secrets of the Worker.
 */
async function handleContact(request: Request, env: Env): Promise<Response> {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return jsonResponse({ error: 'Invalid JSON' }, 400);
    }
    const contact = readContactMessage(body);
    if (!contact) {
        return jsonResponse({ error: 'Invalid form data' }, 400);
    }
    try {
        await env.EMAIL.send({
            from: SENDER,
            to: env.CONTACT_TO,
            replyTo: contact.email,
            subject: `Portfolio: message from ${contact.name}`,
            text: `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
            html: buildHtml(contact),
        });
    } catch (error) {
        console.error('Sending the contact email failed', error);
        return jsonResponse({ error: 'Email could not be sent' }, 502);
    }
    return jsonResponse({ ok: true }, 200);
}

/**
 * Validates the form data the same way as the form in the browser.
 * Returns the cleaned data, or null if something is missing or invalid.
 * @param body - The parsed JSON body of the request.
 */
function readContactMessage(body: unknown): ContactMessage | null {
    if (typeof body !== 'object' || body === null) {
        return null;
    }
    const data = body as Record<string, unknown>;
    if (
        typeof data['name'] !== 'string' ||
        typeof data['email'] !== 'string' ||
        typeof data['message'] !== 'string'
    ) {
        return null;
    }
    // Line breaks in the name would end up in the subject line, so they are replaced by spaces
    const name = data['name'].replace(/[\r\n]+/g, ' ').trim();
    const email = data['email'].trim();
    const message = data['message'].trim();
    const nameValid = name.length >= 2 && name.length <= 100;
    const emailValid = email.length <= 254 && EMAIL_PATTERN.test(email);
    const messageValid = message.length >= 10 && message.length <= 5000;
    if (!nameValid || !emailValid || !messageValid || data['privacy'] !== true) {
        return null;
    }
    return { name, email, message };
}

/**
 * Builds the HTML version of the email. All user input is escaped.
 * @param contact - The validated form data.
 */
function buildHtml(contact: ContactMessage): string {
    const message = escapeHtml(contact.message).replace(/\n/g, '<br>');
    return `<p><strong>Name:</strong> ${escapeHtml(contact.name)}<br><strong>Email:</strong> ${escapeHtml(contact.email)}</p><p>${message}</p>`;
}

/**
 * Replaces the characters that have a meaning in HTML.
 * @param text - Text typed in by a visitor.
 */
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Creates a JSON response with the given status code.
 * @param data - Object that is sent as JSON.
 * @param status - HTTP status code.
 */
function jsonResponse(data: object, status: number): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
}
