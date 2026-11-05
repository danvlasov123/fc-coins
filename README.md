# NINETY — каталог монет EA SPORTS FC

Аффилированная витрина: каталог пакетов игровой валюты EA SPORTS FC 27. Сайт не продаёт
и не принимает оплату — каждая карточка ведёт на магазин партнёра через редирект
`/go/{platform}/{amount}/` с меткой `subid`.

Статика на Astro 5, без серверного рантайма. 32 HTML-страницы: 12 индексируемых и
20 технических редиректов. Вес сборки — около 408 KB.

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # статика в dist/
npm run preview  # локальный предпросмотр сборки
```

## Структура проекта

| Путь | Что это |
| --- | --- |
| `src/data/catalog.js` | Вся семантика каталога: платформы, объёмы, цены, сроки |
| `src/styles/global.css` | Дизайн-токены и все стили компонентов |
| `src/layouts/Base.astro` | `<head>`, meta, canonical, JSON-LD, шрифты |
| `src/components/` | Header, Footer, CoinCard, Icon |
| `src/pages/` | 12 индексируемых страниц + генератор `/go/` |
| `astro.config.mjs` | `site`, интеграция sitemap |
| `public/robots.txt` | Директивы обхода и ссылка на sitemap |

## Страницы: H1 и целевые запросы

| URL | H1 | Целевые ключи |
| --- | --- | --- |
| `/` | EA SPORTS FC coins, delivered in minutes. | `ea sports fc coins`, `fc coins`, `buy fc coins`, `instant delivery` |
| `/fc-27-coins/` | FC 27 coins | `fc 27 coins`, `buy fc 27 coins`, `ea fc 27 coins`, `cheap fc 27 coins` |
| `/fc-27-coins/ps5/` | FC 27 coins for PS5 | `buy fc 27 coins ps5`, `fc 27 coins ps5` |
| `/fc-27-coins/pc/` | FC 27 coins for PC | `buy fc 27 coins pc`, `fc 27 coins pc` |
| `/fc-27-coins/xbox/` | FC 27 coins for Xbox | `buy fc 27 coins xbox`, `fc 27 coins xbox` |
| `/fc-27-coins/ps4/` | FC 27 coins for PS4 | `buy fc 27 coins ps4`, `fc 27 coins ps4` |
| `/pricing/` | FC 27 coin prices | `fc 27 coins price`, `fc 27 coins price per 100k` |
| `/compare/` | Where to buy FC coins | `best place to buy fc coins`, `best site to buy fc 27 coins` |
| `/fc-26-coins/` | FC 26 coins | `fc 26 coins`, `buy fc 26 coins` |
| `/blog/` | Guides | информационные кластеры (задел под статьи) |
| `/about/` | A catalogue, not a store | брендовые запросы, доверие |
| `/legal/` | Legal | юридические запросы, E-E-A-T |
| `/go/{platform}/{amount}/` | Redirecting | `noindex` — в выдачу не попадает |

## Метаданные

Все title укладываются в 39–63 символа, description — в 108–152.

| URL | Title | Description |
| --- | --- | --- |
| `/` | EA SPORTS FC Coins — Compare Prices & Buy Instantly \| NINETY | Compare FC 27 coin packs across PS5, Xbox and PC. Live prices per 100K, honest delivery times, and a verified partner handling every order. |
| `/fc-27-coins/` | FC 27 Coins — Buy Cheap EA FC 27 Coins (PS5, Xbox, PC) \| NINETY | FC 27 coins from $6.49 per 100K. Compare packs for PS5, Xbox and PC, check delivery times, and buy from a verified partner store. |
| `/fc-27-coins/ps5/` | Buy FC 27 Coins PS5 — Instant Delivery \| NINETY | FC 27 coins for PlayStation 5 from $6.08 per 100K. Compare packs, check delivery times, buy from a verified partner. |
| `/fc-27-coins/pc/` | Buy FC 27 Coins PC — Instant Delivery \| NINETY | FC 27 coins for PC · EA App from $5.65 per 100K. Compare packs, check delivery times, buy from a verified partner. |
| `/fc-27-coins/xbox/` | Buy FC 27 Coins Xbox — Instant Delivery \| NINETY | FC 27 coins for Xbox Series X\|S from $5.91 per 100K. Compare packs, check delivery times, buy from a verified partner. |
| `/fc-27-coins/ps4/` | Buy FC 27 Coins PS4 — Instant Delivery \| NINETY | FC 27 coins for PlayStation 4 from $6.34 per 100K. Compare packs, check delivery times, buy from a verified partner. |
| `/pricing/` | FC 27 Coin Prices — Cost per 100K, Updated Daily \| NINETY | Full FC 27 coin price list: every pack across PS5, Xbox, PC and PS4 with the effective cost per 100K. Compare and pick the best rate. |
| `/compare/` | Best Sites to Buy FC Coins in 2026 — Honest Comparison \| NINETY | What actually separates a good FC coin store from a bad one: price transparency, delivery window, support and refunds. A practical comparison checklist. |
| `/fc-26-coins/` | FC 26 Coins — Legacy Packs and Prices \| NINETY | FC 26 coins are still tradeable but stock is thinner. What is available, how delivery works, and why FC 27 packs are the better buy now. |
| `/blog/` | FC Coin Guides — Safety, Delivery and Value \| NINETY | Practical guides to buying EA SPORTS FC coins: ban risk, transfer methods, price timing and how coins compare to FC Points. |
| `/about/` | About NINETY — A Catalogue, Not a Store | NINETY lists EA SPORTS FC coin packs from one verified partner. No accounts, no passwords, no payments on our side. |
| `/legal/` | Legal — Terms, Privacy, Disclaimer \| NINETY | Terms of use, privacy policy and disclaimer for NINETY, an independent catalogue of EA SPORTS FC coin packs. |

## Техническое SEO — что уже реализовано

- `<html lang="en">`, корректный viewport, `theme-color`.
- Абсолютный `rel="canonical"` на каждой странице, собирается из `site` в `astro.config.mjs`.
- `robots.txt` в `public/`, ссылается на `sitemap-index.xml`.
- Sitemap генерируется интеграцией `@astrojs/sitemap`, `/go/` исключён фильтром — 12 URL.
- JSON-LD: `Organization` и `WebSite` на всех страницах, `FAQPage` — на главной,
  хабе FC 27, платформенных страницах и FC 26.
- `/go/*` закрыты `noindex, follow` — не создают дублей и не тянут вес.
- Open Graph и Twitter Card (без `og:image` — см. чеклист).
- Favicon — инлайн SVG, без лишнего запроса.
- Шрифты через `preconnect` + `display=swap`, CSS инлайнится автоматически.
- Хлебные крошки есть визуально на всех внутренних страницах.

## Техническое SEO — чего пока нет

| Что | Почему нужно | Где делать |
| --- | --- | --- |
| `og:image` | Превью в соцсетях и Telegram | картинка 1200×630, прописать в `Base.astro` |
| `BreadcrumbList` | Расширенный сниппет в выдаче | `Base.astro` + передача крошек из страниц |
| `Product` / `Offer` | Цена прямо в сниппете | карточки пакетов, но только с реальными ценами |
| Блог-статьи | Информационный трафик и перелинковка | сейчас только индекс с тизерами |
| Страницы сумм | `fc 27 coins 1m`, `500k` | `/fc-27-coins/ps5/1m/` и т.п. |
| Аналитика | Клики по `/go/`, конверсия в партнёра | GA4 или Plausible + событие `affiliate_click` |
| 404-страница | Возврат пользователя | `src/pages/404.astro` |
| hreflang | Не нужен, пока один язык | добавить вместе с `/de/` |

## Семантика: кластеры и статус

Статусы: **есть** — страница создана и ключ в тексте, **частично** — страница есть,
ключ звучит слабо, **план** — не реализовано.

### A. Коммерческое ядро FC 27

| Ключ | Страница | Статус |
| --- | --- | --- |
| `fc 27 coins` | `/fc-27-coins/` | есть |
| `buy fc 27 coins` | `/fc-27-coins/` | есть |
| `ea fc 27 coins` | `/fc-27-coins/` | есть |
| `cheap fc 27 coins` | `/fc-27-coins/` | есть |
| `fc 27 coins for sale` | `/fc-27-coins/` | частично |
| `fc 27 coins price` | `/pricing/` | есть |
| `fc 27 coins price per 100k` | `/pricing/` | есть |
| `fc 27 coins 100k` / `1m` | — | план (отдельные URL) |
| `fc 27 coins paypal` | `/fc-27-coins/` | частично |
| `fc 27 coins instant delivery` | `/`, `/fc-27-coins/ps5/` | есть |

### B. Платформы

| Ключ | Страница | Статус |
| --- | --- | --- |
| `buy fc 27 coins ps5` | `/fc-27-coins/ps5/` | есть |
| `buy fc 27 coins pc` | `/fc-27-coins/pc/` | есть |
| `fc 27 coins xbox` | `/fc-27-coins/xbox/` | есть |
| `buy fc 27 coins ps4` | `/fc-27-coins/ps4/` | есть |

### C. Сравнение и выбор

| Ключ | Страница | Статус |
| --- | --- | --- |
| `best place to buy fc coins` | `/compare/` | есть |
| `best site to buy fc 27 coins` | `/compare/` | есть |
| `cheapest place to buy fc 27 coins` | `/compare/` | частично |
| `best fc coins site` | — | план |
| `fc 27 coins reddit` | — | план (блог) |

### D. Evergreen

| Ключ | Страница | Статус |
| --- | --- | --- |
| `ea sports fc coins` | `/` | есть |
| `fc coins` | `/` | есть |
| `buy fc coins` | `/` | есть |
| `ea fc coins` | `/` | частично |
| `fut coins` | — | план |

### E. Прошлый сезон

| Ключ | Страница | Статус |
| --- | --- | --- |
| `fc 26 coins` | `/fc-26-coins/` | есть |
| `buy fc 26 coins` | `/fc-26-coins/` | частично |

### F. Информационные — задел под блог

`is buying fc 27 coins safe`, `can you get banned for buying fc 27 coins`,
`how does buying fc 27 coins work`, `how to transfer coins fc 27`,
`fc 27 coins vs fc points`, `how much are fc 27 coins worth`,
`fc 27 coin transfer methods`.

Сейчас в тексте ключей «ban» и «fc points» нет — это первые кандидаты на статьи.

### G. Что не таргетируем

`fc 27 coins free`, `coin generator`, `hack`, `glitch` — трафик без покупательского
интента. Оптовые B2B-запросы (`fc coins wholesale`, `supplier`) — вне этой модели:
сайт ведёт на один партнёрский магазин, а не собирает реселлеров.

## Покрытие ключей в тексте

Замер по собранному HTML, вхождения без учёта `<head>`:

| Ключ | Вхождений | Где |
| --- | --- | --- |
| `fc 27 coins` | 7 / 5 | хаб / PS5 |
| `buy fc 27 coins` | 1 / 1 | хаб / PS5 |
| `ea fc 27 coins` | 1 | хаб |
| `fc coins` | 2 | главная |
| `ea sports fc coins` | 2 | главная |
| `cheap` | 3 / 2 | хаб / главная |
| `price per 100k` | 1 / 2 | прайс / сравнение |
| `instant delivery` | 2 / 1 | главная / PS5 |
| `paypal` | 2 | главная |
| `best place` | 1 | сравнение |
| `ban` | 0 | — нужна статья |
| `fc points` | 0 | — нужна статья |

Объём текста: главная ~1028 слов, хаб 667, PS5 455, прайс 389, сравнение 352, FC 26 323.
Для конкурентных запросов этого мало — наращивать за счёт блога и страниц сумм.

## Перелинковка

- Шапка: Coins → Pricing → Compare → Guides, кнопка `Buy coins` ведёт на хаб.
- Футер: четыре колонки, ссылки на платформы, прайс, сравнение, юридические страницы.
- Хаб → четыре платформенные страницы (карточки с ценой «from»).
- Карточки пакетов → `/go/{platform}/{amount}/` (единственный выход на партнёра).
- Сравнение → `/fc-27-coins/`.
- Все внутренние ссылки проверены скриптом: битых нет.

## Контент-план

1. Is buying FC 27 coins safe — риски и как их снизить.
2. Ban risk: что реально триггерит EA.
3. How coin transfers work — аукцион, пошагово.
4. FC 27 coins vs FC Points — математика на $20.
5. Cheapest place to buy FC 27 coins — обновляемое сравнение.
6. When coins are cheapest — сезонность цен.
7. Как читать цену за 100K — короткий разбор для новичков.
8. FC 26 → FC 27: что делать с остатками.

## Перед запуском

1. **Партнёр.** `PARTNER_BASE` в `src/pages/go/[platform]/[amount].astro`. Пока пусто —
   страница показывает демо-заглушку вместо редиректа.
2. **Цены.** `BASE_PER_100K` и `TIERS` в `src/data/catalog.js`. Карточки, таблицы,
   калькулятор и subid пересчитываются автоматически.
3. **Домен.** Заменить `site` в `astro.config.mjs` и адрес в `public/robots.txt`,
   иначе canonical и sitemap будут указывать на `ninetycoins.com`.
4. **Бренд.** `src/components/Header.astro`, `src/components/Footer.astro`,
   `src/pages/legal.astro`.
5. **Юридика.** Проверить disclaimer: сайт не аффилирован с EA, риски бана описаны
   честно, без обещаний «0% ban».

## Деплой

`npm run build` → папка `dist/`. Подходит Cloudflare Pages, Netlify, Vercel,
GitHub Pages — серверный рантайм не нужен. После переезда на домен отправить
`sitemap-index.xml` в Google Search Console и Bing Webmaster Tools.

## Ограничения текущей версии

- Один язык, hreflang не настроен.
- Нет `og:image` — превью в соцсетях будет без картинки.
- Нет аналитики: клики по `/go/` пока нигде не считаются.
- Цены демонстрационные, к реальному прайсу партнёра не привязаны.
