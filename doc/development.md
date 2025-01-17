[back](../README.md)

# Setup & Development

## Getting Started

Install the dependencies:

```
npm install
```

Copy [public/settings.example.js](../public/settings.example.js) to `public/settings.js` and adjust its contents.

Start the development server:

```
npm run dev
```

The application is now available at http://localhost:3000

## Linting & Testing

### Linting

Run TypeScript compiler & ESLint:

```
npm run lint
```

### E2E Tests

Run E2E tests interactively:

```
npm run cy:open
```

Run E2E tests headless:

```
npm run cy:run
```

For more information, see [Cypress](https://www.cypress.io/).

## Responsive Design

Mobile breakpoints:

- bigger than 1920px: content centered
- smaller than 1200px: hamburger menu
- smaller than 767px: mobile compact

## I18n

The portal is translated using [lit-localize](https://lit.dev/docs/localization/overview/). The texts of the base language (german) are contained in the source files. The other languages (currently only french) can be translated using a [XLIFF](https://en.wikipedia.org/wiki/XLIFF) file.

### Translation Workflow

Update the french translation file by extracting the base language texts from the source files:

```
npm run locale:extract
```

The generated translation file [xliff/fr-CH.xlf](../xliff/fr-CH.xlf) can then be edited manually with a text editor or more conveniently with a XLIFF-compatible editor like [Poedit](https://poedit.net/) (open source).

When all texts are translated, generate the locale artifacts:

```
npm run locale:build
```
