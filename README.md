# NINETY — FC coins catalogue

Affiliate storefront for EA SPORTS FC coins. Static Astro site: catalogue pages,
price calculator, comparison page, and a `/go/` hand-off to the partner store.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/catalog.js` | The whole catalogue: platforms, pack sizes, prices, delivery windows |
| `src/styles/global.css` | Design tokens and every component style |
| `src/components/CoinCard.astro` | Pack card used across the site |
| `src/layouts/Base.astro` | Head, fonts, meta, header/footer wrapper |
| `src/pages/go/[platform]/[amount].astro` | Partner redirect + `subid` |

## Connect the partner

1. Open `src/pages/go/[platform]/[amount].astro`.
2. Set `PARTNER_BASE` to the checkout URL, e.g. `https://partner.example/checkout`.
3. Every card then redirects with `?subid=ninety-<platform>-<amount>`.

Until `PARTNER_BASE` is set, the page renders a demo notice instead of redirecting.

## Edit prices

Everything is derived from `BASE_PER_100K` and `TIERS` in `src/data/catalog.js`.
Change the base rate per platform or the volume discount factor — cards, tables,
calculator and redirects all follow automatically.

## Brand

The name lives in two places: `src/components/Header.astro` and
`src/components/Footer.astro`. Legal text is in `src/pages/legal.astro`.

## Deploy

`npm run build` produces a plain `dist/` folder. Drop it on Cloudflare Pages,
Netlify or Vercel — no server runtime required.

## Note

The site is not affiliated with EA. No EA logos or club marks are used anywhere.
