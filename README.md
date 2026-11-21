# Portfolio – Keanu Centamore

My personal portfolio website as a frontend developer, built with Angular. It introduces me, my skills and my projects and lets visitors contact me directly.

Created as part of the frontend course at Developer Akademie, based on the course's Figma template.

## Features

- **Two languages:** German and English, switchable in the header and in the mobile menu; page title and `lang` attribute switch along
- **Hero** at full screen height with photo, scroll hint and social links
- **About me** with a text slider (arrows and dots) for the full introduction
- **Skill set** as fixed tiles, three per row on mobile
- **My work:** projects with preview image, technologies, description, live test and GitHub link
- **References** from people I have worked with
- **Contact form** with Reactive Forms:
  - validation when leaving a field, error messages without layout shift
  - field names move onto the border on focus, error icon in invalid fields
  - submit only possible when everything is valid and the privacy checkbox is ticked
  - feedback after sending
- **Legal notice and privacy policy** as separate pages, linked in the footer
- **Hover states and keyboard focus** for all links, buttons and icons
- **Responsive** from 320 px to wide screens: own layouts for mobile, tablet (1024–1439 px) and desktop; on very wide screens the content stays centered

## Built with

- Angular 21 with standalone components and signals
- TypeScript
- Reactive Forms for the contact form
- [ngx-translate](https://github.com/ngx-translate/core) for German and English
- Angular Router with anchor scrolling, so the header links jump to the sections from every page
- Plain CSS with CSS variables, Flexbox and Grid
- Fonts (Baloo 2, Montserrat, Open Sans) included locally, no connection to Google Fonts

## Project structure

```
src/
  app/
    header/            logo, navigation, language switch, mobile menu
    language-switch/   DE / EN buttons
    main-page/         hero, about, skills, my-work (with project-item), references, contact
    footer/            logo, copyright, social links, legal links
    legal-notice/      legal notice page
    privacy-policy/    privacy policy page
    services/          project data
    interfaces/        Project interface
  styles.css           colors, reset, shared button and bubble styles
public/
  i18n/                en.json and de.json with all texts
  icons/, images/, fonts/
```

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:4200/` in the browser.

To build for production:

```bash
npm run build
```

The finished files are in `dist/portfolio/browser`.

## Contact form and hosting

The site runs on a Cloudflare Worker (`worker/index.ts`, configured in `wrangler.jsonc`). The Worker serves the built Angular app and handles `POST /api/contact`: it checks the form data again on the server and forwards the message by email through Cloudflare Email Routing, with the visitor's address as reply-to.

The recipient address is not stored in the repository but as a secret:

```bash
npx wrangler secret put CONTACT_TO
```

To test the Worker locally, create a `.dev.vars` file with `CONTACT_TO=you@example.com` and run:

```bash
npm run cf:types   # generates the Worker types
npm run cf:dev     # builds the app and starts the Worker on http://localhost:8787
```

Locally the email is only simulated and logged in the terminal. `npm run cf:deploy` builds and publishes the site.
