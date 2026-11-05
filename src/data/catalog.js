export const PLATFORMS = [
  { id: "ps5", label: "PS5", full: "PlayStation 5", eta: "10–15 min", blurb: "Fastest delivery on PSN. Most orders ship in under ten minutes." },
  { id: "xbox", label: "Xbox", full: "Xbox Series X|S", eta: "10–15 min", blurb: "Direct to your Xbox club. No console login required." },
  { id: "pc", label: "PC", full: "PC · EA App", eta: "5–10 min", blurb: "Same-day on PC. The cheapest per 100K across all platforms." },
  { id: "ps4", label: "PS4", full: "PlayStation 4", eta: "15–20 min", blurb: "Still supported. Slower stock, but the same buyer protection." },
];

const BASE_PER_100K = { ps5: 6.99, xbox: 6.79, pc: 6.49, ps4: 7.29 };

const TIERS = [
  { amount: 100000, label: "100K", factor: 1.0, badge: null },
  { amount: 500000, label: "500K", factor: 0.97, badge: "Popular" },
  { amount: 1000000, label: "1M", factor: 0.94, badge: "Most popular" },
  { amount: 2000000, label: "2M", factor: 0.91, badge: null },
  { amount: 5000000, label: "5M", factor: 0.87, badge: "Best value" },
];

const round = (n) => Math.round(n * 100) / 100;

export const CATALOG = PLATFORMS.flatMap((platform) =>
  TIERS.map((tier) => {
    const base = BASE_PER_100K[platform.id];
    const price = round(base * (tier.amount / 100000) * tier.factor);
    return {
      id: `${platform.id}-${tier.label.toLowerCase()}`,
      platform: platform.id,
      platformLabel: platform.label,
      platformFull: platform.full,
      amount: tier.amount,
      amountLabel: tier.label,
      price,
      per100k: round(price / (tier.amount / 100000)),
      compareAt: round(price * 1.14),
      eta: platform.eta,
      badge: tier.badge,
      featured: tier.amount === 1000000,
      href: `/go/${platform.id}/${tier.label.toLowerCase()}/`,
    };
  })
);

export const byPlatform = (id) => CATALOG.filter((item) => item.platform === id);

export const usd = (value, decimals = 2) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;

export const HERO_ITEM = CATALOG.find((item) => item.platform === "ps5" && item.amount === 1000000);
