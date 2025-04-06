# altijdpoesjes Website

This is the official website for altijdpoesjes, featuring handmade cat-themed art and products.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Home page with artist information and featured products
- Products page displaying various items for sale
- Contact page with a contact form and FAQ section

## Domain

The website is deployed at [altijdpoesjes.com](https://altijdpoesjes.com)

## Tech Stack

- [Nuxt 3](https://nuxt.com) - Vue.js framework
- Vue 3 with Composition API
- CSS with scoped styling

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Generate a static version of the website:

```bash
# npm
npm run generate
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles:

1. Building the site with `npm run generate`
2. Deploying the static files to GitHub Pages

A preview version is available at: https://mvdbeek.github.io/altijdpoesjes/

For other deployment options, see the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).