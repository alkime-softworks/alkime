# ALKIME homepage

The company homepage for ALKIME LLC at https://alkime.co, built with Gatsby and published on GitHub Pages.

## Local development

Use the dependencies pinned in `yarn.lock`:

```sh
yarn install --frozen-lockfile
yarn develop
```

The homepage is in `src/pages/index.js`, its styles are in `src/styles/global.css`, and company metadata is in `gatsby-config.js`. The site uses system fonts, its existing favicon, and an inline decorative SVG; there are no extra asset or service dependencies.

## Build and review

```sh
yarn build
yarn serve
```

Review desktop and phone layouts, keyboard navigation, project descriptions, and any contact details before publishing. The starter's `test` script is a placeholder, not a passing test suite.

## Publish after approval

```sh
yarn deploy
```

This existing script builds Gatsby and publishes the `public` directory to the `gh-pages` branch of this repository. It changes the live site; run it only after the homepage and publication are approved. Source changes should be committed to `master` through the normal review process.

Keep `static/CNAME` set to `alkime.co`. Check the GitHub Pages deployment and https://alkime.co after publishing. The homepage should identify ALKIME LLC, show the product information, and no longer contain a site-coming-soon placeholder.

## Content upkeep

Cyclops and BikeCheck are described as projects in development. Update availability and add product destinations only once they are publicly usable. Publish a company contact address only after its owner has approved using it publicly.
