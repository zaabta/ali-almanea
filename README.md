# Ali Almanea Portfolio

An English-only React portfolio for Ali Almanea, Senior Full Stack Engineer. It presents verified experience, technical skills, selected projects, education, and engineering articles.

## Stack

- Create React App with React 18
- React Bootstrap and Sass
- Font Awesome icons
- GSAP and ScrollTrigger
- Canvas-based FuzzyText for the Hero and 404 page
- Structured portfolio and article data in `src/data`

## Local development

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000` by default.

## Production checks

```bash
npm run build
npm test -- --watchAll=false --passWithNoTests
```

The production output is generated in `build/`. The app uses pathname-based routing for `/`, `/blog`, and `/blog/:slug`; unknown paths render the fuzzy 404 page. Configure the hosting provider to serve `index.html` for those routes when deploying as a single-page app.

## SEO and deployment

Static homepage metadata lives in `public/index.html`. Route-specific metadata and JSON-LD are updated by `src/components/seo/index.js` for the client-rendered blog routes. The sitemap and robots file are in `public/`.

Before publishing, replace relative sitemap and social URLs with the confirmed production domain. No production domain has been assumed in this repository. Do not add secrets or `.env` files to Git.

## Repository

The configured remote is `https://github.com/zaabta/zaabta.github.io/` on the `main` branch.

## License

No license has been specified.
