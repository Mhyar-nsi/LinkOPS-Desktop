<div align="center">

# LinkOPS Desktop — Website

**The official landing page for [LinkOPS Desktop](../README.md)** — a bilingual
(English ⇄ فارسی) Next.js site with full RTL, three theme modes, and real
screenshots captured from the app itself.

<img src="public/logo.png" alt="LinkOPS Desktop" width="96" />

**Next.js 15 · Tailwind CSS · TypeScript · Fully static output**

</div>

---

## ✨ Highlights

| | |
|---|---|
| 🎨 **Pixel-identical to the app** | Same HSL palette, Vazirmatn + JetBrains Mono fonts, cards, borders and dark theme as the desktop app. |
| 🌐 **EN ⇄ فارسی with full RTL** | Every string is hand-written in both languages; `dir="rtl"` flips the whole layout instantly, no hydration flash. |
| 🌗 **Light / Dark / System themes** | Zero-flash inline script in `<head>`, persisted to `localStorage`, follows OS preference in System mode. |
| 📸 **Real screenshots** | Gallery tabs mirror the app's sidebar and show PNGs captured from the running desktop app (see below). |
| 📖 **Paginated guide** | The tutorial is split into 9 pages (`/guide`, `/guide/install`, `/guide/devices`, …) with real prev/next pagination — each section is its own URL, navigated client-side. |
| 🚀 **Changelog page** | `/changelog` lists every release (bilingual, newest first) — the same data powers the JSON feed the desktop app checks for updates. |
| 💳 **Pricing page** | `/pricing` is its own page — the 3/6/12-month plans (USD in English, Toman in Persian) live there, not on the landing page. |
| 🗂 **Tabbed downloads** | The `#download` section is a full-width tab bar (Windows / macOS / Linux) — pick your OS and see its full details, install steps and download button. |
| 💻 **Terminal-style details** | Every terminal/command block (hero mock, Linux install commands, guide) is forced `dir="ltr"` so it never mirrors inside the Persian RTL layout, with a copy button. |
| ⚡ **Static by default** | `output: static`-style App Router pages prerender to plain HTML — fast, cacheable, no server needed. |
| 🎬 **Motion on scroll** | Built on the latest **framer-motion**: sections reveal with a fade/slide when they enter the viewport and cards stagger — all disabled for `prefers-reduced-motion`. |
| 🧭 **SPA navigation** | Every internal link uses `next/link` — moving between pages never reloads the document; the top loader shows the client-side transition instead. |
| ⏳ **Top loader** | `nextjs-toploader` shows a slim gradient progress bar at the top while navigating between pages — the “progress bar” you see is page-transition, not scroll progress. |
| 📦 **Standalone** | Lives in its own folder with its own `package.json`; the Electron app never needs to build or ship it. |
| 🪟 **Official OS logos** | Windows, Linux and macOS logos come from `react-icons/fa6` — they inherit the site's color in both themes. |

---

## 🚀 Quick start

```bash
npm install
npm run dev        # → http://localhost:3000 (HMR)
npm run build      # production build (static HTML in .next)
npm start          # serve the production build locally
npm run lint       # eslint
```

## 🗂 Project structure

```
web/
├── app/
│   ├── layout.tsx        # <html> shell, metadata, no-FOUC theme/lang script, NextTopLoader
│   ├── page.tsx          # the landing page
│   ├── guide/page.tsx    # guide overview (route: /guide)
│   ├── guide/[slug]/page.tsx # one page per guide section (/guide/install, /guide/devices, …) via generateStaticParams
│   ├── privacy/page.tsx  # privacy policy (route: /privacy)
│   ├── terms/page.tsx    # terms of service (route: /terms)
│   ├── changelog/page.tsx # release notes (route: /changelog)
│   ├── pricing/page.tsx  # license plans (route: /pricing)
│   ├── api/updates/latest.json/route.ts # JSON feed the desktop app checks at startup
│   └── globals.css       # Tailwind + the app's exact design tokens
├── components/
│   ├── SiteHeader.tsx    # sticky header: only the top pages with icons (guide / changelog / pricing) + Download CTA, theme, language, mobile menu
│   ├── Guide.tsx         # one guide section per page: sidebar with section links, callouts (tip/note/warning), shortcut table, real prev/next pagination
│   ├── LegalPage.tsx     # shared bilingual layout for /privacy and /terms
│   ├── Changelog.tsx     # bilingual release notes timeline (newest first)
│   ├── Download.tsx      # full-width OS tabs (Windows/macOS/Linux): details, install steps and download button per platform
│   ├── Pricing.tsx       # 3/6/12-month license plans + yearly discount
│   ├── Hero.tsx          # headline + animated terminal mock (LTR in RTL) over PixelBlast
│   ├── ui/PixelBlast.tsx # WebGL pixel-field effect (three + postprocessing), ripples on click
│   ├── ui/TerminalShell.tsx # reusable LTR terminal block with $ prompts + copy button
│   ├── ui/Reveal.tsx      # framer-motion scroll-reveal wrapper (fade/slide + stagger)
│   ├── Features.tsx      # capability grid
│   ├── Screenshots.tsx   # tabbed gallery (instant switch, loading state, both themes preloaded)
│   ├── Protocols.tsx     # SSH vs Telnet comparison
│   ├── Security.tsx      # security highlights
│   ├── Cta.tsx           # closing call-to-action (+ guide link)
│   ├── Footer.tsx        # footer: guide + privacy + terms links
│   ├── ThemeToggle.tsx   # light / dark / system
│   └── LangToggle.tsx    # EN / فارسی
├── lib/
│   ├── dictionary.ts     # the full EN + FA copy (hand-written, natural) incl. guide + legal sections
│   ├── lang.tsx          # language context (persisted, hydration-safe)
│   ├── theme.tsx         # theme context (persisted, hydration-safe)
│   ├── site.ts           # ⚙️ site config: version + download URLs
│   ├── releases.ts       # 🗓 release history (single source for /changelog + the update feed)
│   ├── guide.ts          # guide section order + href helpers (shared by page routes and the component)
│   └── utils.ts          # cn() helper
└── public/
    ├── logo.png                # the app icon (favicon + header/footer)
    └── screenshots/*.png       # real captures from the desktop app (dark + -light pairs)
```

---

## ⚙️ Configuration (download links & version)

The user-facing download buttons point at the **#download** section, a
**full-width tab bar** with three tabs — **Windows** (`.exe` installer with
install steps), **macOS** (`.dmg` with drag-to-Applications steps) and
**Linux** (two packages: `.deb` for Debian/Ubuntu and **AppImage** for any
distro, each with its own terminal-styled install commands). Pick your OS
and its full details, install steps and download button appear.

Set the real links — either edit the fallbacks in `lib/site.ts`, or (better)
set environment variables in Vercel so the same build can be reused:

| Env var | Purpose | Example |
|---|---|---|
| `NEXT_PUBLIC_APP_VERSION` | Version shown on the download cards | `1.0.1` |
| `NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS` | Windows installer (`.exe` / `.msi`) | `https://cdn.example.com/LinkOPS.Desktop.Setup.1.0.1.exe` |
| `NEXT_PUBLIC_DOWNLOAD_URL_LINUX_DEB` | Linux `.deb` package | `https://cdn.example.com/linkops-desktop_1.0.1_amd64.deb` |
| `NEXT_PUBLIC_DOWNLOAD_URL_LINUX_APPIMAGE` | Linux AppImage | `https://cdn.example.com/LinkOPS.Desktop-1.0.1.AppImage` |
| `NEXT_PUBLIC_DOWNLOAD_URL_MAC` | macOS `.dmg` installer | `https://cdn.example.com/LinkOPS.Desktop-1.0.1.dmg` |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph / Twitter cards | `https://linkops.example.com` |
| `NEXT_PUBLIC_PURCHASE_URL` | Checkout link for the pricing “Buy” buttons | `https://checkout.example.com/buy` |
| `NEXT_PUBLIC_CURRENCY` | Currency symbol in the English pricing section | `$` |
| `NEXT_PUBLIC_CURRENCY_FA` | Currency label in the Persian pricing section | `تومان` |

Until a URL is set, the matching button is disabled, so the site never
renders broken links. Pricing plans (3/6/12 months with a 33% discount on
the yearly term) live in `lib/site.ts` as `PLANS` — edit prices there or
override via env if you ever need to.

## 💳 Pricing page (`/pricing`)

The license plans live on their own page — `/pricing` — with **dual
pricing**: the English UI shows USD, the Persian (فارسی) UI shows Toman
automatically based on the active language:

| Plan | USD | USD compare-at | Toman | Toman compare-at | Discount |
|---|---|---|---|---|---|
| 3 months | $14.99 | — | ۱٬۴۹۰٬۰۰۰ تومان | — | — |
| 6 months | $24.99 | $29.98 | ۲٬۴۹۰٬۰۰۰ تومان | ۲٬۹۹۰٬۰۰۰ تومان | 17% |
| 12 months | $39.99 | $59.96 | ۳٬۹۹۰٬۰۰۰ تومان | ۵٬۹۹۰٬۰۰۰ تومان | 33% (featured) |

The 12-month card is highlighted as “Best value”. Prices are per machine,
per term. Each “Buy” button links to `PURCHASE_URL` when set (otherwise it
scrolls to `#download`), so the site works even before the checkout is wired
up. The install steps shown on the cards (Windows wizard,
`sudo apt install ./…deb`, `chmod +x …AppImage`) are static copy in
`lib/dictionary.ts` — update them together with the version if filenames
change.

## 📖 The guide page (`/guide`)

The tutorial is styled like the Next.js docs: a **sticky sidebar** with
**scrollspy** (the current section is highlighted as you scroll), numbered
sections, **callout boxes** (نکته / یادداشت / هشدار — tip / note / warning),
a **keyboard-shortcuts table** (Ctrl+K palette, Ctrl+N new device, Ctrl+,
settings, Ctrl+F find), terminal command blocks, and **prev/next** cards at
the bottom of every section. All copy lives in `lib/dictionary.ts` under
`guide.*` — add a `notes` array for callouts or a `table` object to render
a table in any section.

## 🚀 Changelog page + update feed

`/changelog` renders the release history from `lib/releases.ts` (bilingual,
newest first). The same data feeds **`/api/updates/latest.json`** — the JSON
the desktop app polls at startup (see `UPDATE_MANIFEST_URL` in the app's
`src/main/services/updateService.ts`):

```json
{
  "version": "1.0.1",
  "notes": "…",
  "downloads": { "win": "…", "linux": "…", "darwin": "…" }
}
```

To ship a new version: bump `APP_VERSION` in `lib/site.ts`, add the entry at
the top of `RELEASES` in `lib/releases.ts`, and set the download links (env
vars above). The site's static build regenerates the feed automatically.

## 📖 The guide (`/guide` + `/guide/<slug>`)

The tutorial is **paginated** — every section is its own page (`/guide`,
`/guide/install`, `/guide/devices`, `/guide/connect`, `/guide/commands`,
`/guide/batch`, `/guide/history`, `/guide/settings`, `/guide/update`), built
statically via `generateStaticParams`. Each page has:

- a sticky **sidebar** listing all sections (each linking to its own page,
  the current one highlighted),
- numbered steps, **callout boxes** (نکته / یادداشت / هشدار — tip / note /
  warning), terminal command blocks and the **keyboard-shortcuts table**,
- **prev / next** cards that navigate to the adjacent section pages.

Content lives in `lib/dictionary.ts` under `guide.*`; section order and the
href helpers are in `lib/guide.ts`. Every link (sidebar, prev/next, header,
footer, CTAs) uses `next/link`, so moving between pages is a client-side
SPA transition with the top loader — never a full document reload.
- **`/privacy`** and **`/terms`** — bilingual legal pages powered by the
  shared `LegalPage` component (copy under `legal.*` in the dictionary);
  linked from the footer.

## 🧠 Architecture notes

- **Hydration-safe persistence** — both the language and theme providers start
  with the server default and apply the saved value in a mount effect, while a
  tiny inline script in `app/layout.tsx` sets `<html lang/dir>` and the dark
  class *before first paint*. Result: no hydration mismatch, no flash.
- **RTL** — switching to فارسی sets `dir="rtl"` on `<html>`; Tailwind classes
  are direction-agnostic (flex/grid) so the layout mirrors cleanly.
- **Fonts** — bundled via `@fontsource-variable`: Vazirmatn (Persian) and
  JetBrains Mono (terminal/`mono-tag` text), so rendering is identical on
  every machine with no external requests.
- **Static output** — no server-only data; the whole page prerenders to static
  HTML for Vercel's edge CDN.
- **Interactive hero** — `Hero.tsx` renders `PixelBlast` (a WebGL shader, via
  `three` + `postprocessing`) as an absolute background layer behind the hero
  content: a subtle animated pixel matrix in the app's terminal-accent green
  that ripples where you click. It is a client component with its own
  lifecycle, so the static HTML still hydrates cleanly with no SSR mismatch.

---

## 📸 Regenerating the screenshots

Screenshots are captured from the **real desktop app** (not mocked) by the
repo's smoke-test infrastructure. From the repository root:

```bash
npm run build
LINKOPS_SHOTS=1 npx electron out/main/index.js
```

This runs the app headlessly with a **throwaway database**, seeds a realistic
inventory (devices, groups, tags, command templates), opens live SSH sessions
against a local test server, runs commands and a batch run, then walks every
page and writes PNGs to `web/public/screenshots/`:

```
dashboard.png  devices.png  device-detail.png  sessions.png  batch-runs.png
commands.png   command-groups.png  history.png  logs.png  settings.png
```

### 🌗 Light & dark pairs

Every page is captured **twice** — once with the app's **dark theme**
(default filenames) and once with the **light theme** (`-light` suffix):

```
dashboard.png        dashboard-light.png
sessions.png         sessions-light.png
settings.png         settings-light.png
…
```

The capture script switches the running app to the light theme live
(via a `window.__linkopsSetTheme` hook) and re-walks every page, so both
versions show the exact same content. The site's `Screenshots` gallery picks
the matching file from the resolved site theme — dark shots in dark mode,
light shots in light mode (and in System mode it follows the OS). The
renderer hook is harmless outside captures and only flips the app theme.

Both passes use the **English UI** so the gallery is deterministic, and each
run starts from a fresh database — no accumulating demo data.

---

## ☁️ Deploying to Vercel

The site is a standard Next.js app; the only setting that matters is pointing
Vercel at the `web` folder.

### Via the Vercel dashboard

1. Push the repository to GitHub / GitLab / Bitbucket.
2. **Add New → Project** and import the repo.
3. Set **Root Directory** to `web` (the site is intentionally self-contained —
   this keeps the Electron app and the website completely independent).
4. (Optional) add the `NEXT_PUBLIC_*` variables from the table above.
5. **Deploy.** Every push to the production branch redeploys automatically.

### Via the CLI

```bash
npm i -g vercel
cd web
vercel            # first time: link the project, deploy a preview
vercel --prod     # production
```

> **Tip:** because the output is fully static, you can also export it
> (`next build` already prerenders all routes) and host the result on any
> static file server or CDN.

---

## 🧪 Verification

```bash
npm run build     # must end with "○  (Static)  prerendered as static content"
npm run lint      # eslint — no errors
```

Manual smoke checklist:

- [ ] Switch to فارسی — everything flips RTL, dates/digits render Persian.
- [ ] Toggle Light / Dark / System — persists across reloads; System follows the OS.
- [ ] Click any **Download** button — the page scrolls to the `#download` section.
- [ ] Open `/pricing` — 3 cards, the 12-month one highlighted with its discount; flip to فارسی for Toman prices.
- [ ] In `#download`, click the macOS / Linux tabs — each shows its own details, install steps and download button.
- [ ] The header shows only Guide, Changelog, Pricing (+ Download CTA) on desktop and mobile.
- [ ] Navigate between `/`, `/guide`, `/changelog`, `/pricing`, `/privacy`, `/terms` — the top loader bar appears during the transition.
- [ ] Open `/changelog` in both languages — release notes render with RTL, newest first.
- [ ] On `/guide`, scroll — the sidebar highlights the current section; callouts and the shortcuts table render in both languages.
- [ ] Open `/privacy` and `/terms` in both languages — content flips with RTL.
- [ ] From `/guide/install` click **Next** — `/guide/devices` loads without a full page reload (SPA).
- [ ] Click the header **Download** from any page — it lands on `#download` on the home page.

---

## 📄 License

The site content is part of the LinkOPS Desktop project; see the repository
root for licensing. The bundled fonts (Vazirmatn, JetBrains Mono) are SIL OFL
1.1 licensed.
