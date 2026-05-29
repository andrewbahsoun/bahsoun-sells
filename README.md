# Bahsoun Sells

A Next.js site for Bahsoun Sells, a local resale service that helps people sell unwanted items.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Netlify Deployment

This project is configured for Netlify in `netlify.toml`.

Use these settings if Netlify asks for them:

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `20`

The site uses Netlify's automatic Next.js adapter for modern Next.js projects. No pinned `@netlify/plugin-nextjs` package is required.

## Production Check

```bash
npm run lint
npm run build
```
