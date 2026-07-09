# Ditto × EF

Matchmaking landing page for **Ditto × Entrepreneur First**. Founders and EF
investors each apply through their own form; no backend, everything submits
via [Web3Forms](https://web3forms.com).

## Pages

| File           | Purpose                                                   |
| -------------- | ---------------------------------------------------------- |
| `index.html`   | Landing page — choose "I'm a founder" or "I'm an EF investor" |
| `founder.html` | Founder application (SPC-style questions)                 |
| `investor.html`| EF investor registration (name, EF email, investor type)  |
| `styles.css`   | Shared styling — cream/Fraunces Ditto base + EF black/red accent |
| `script.js`    | Footer year, "Other" investor-type reveal, AJAX form submit |

## Design

Same warm editorial aesthetic as the Ditto Party page (cream background,
Fraunces serif headlines, Inter body) with Entrepreneur First's electric
purple + coral orange identity layered in — coral (`--accent: #fa7452`)
for highlights and selected states, purple (`--ef-purple: #6c0ee0`) for
the EF badge and submit buttons. Colors were eyeballed from the real EF
logo.

**Note:** the EF mark on the landing page is a CSS recreation of the
wordmark (stacked coral "ENTRE / PRENEURS / FIRST" on purple). If you get
the official logo file, drop it in `assets/` and swap it into `index.html`
(`.logo-ef`).

## Form submissions

1. Go to [web3forms.com](https://web3forms.com) and get an access key.
2. Replace `YOUR_ACCESS_KEY_HERE` in **both** `founder.html` and
   `investor.html` (they can use the same key or two different ones if you
   want submissions split).

Until that's set, each form shows a "not configured" message instead of
submitting.

## Local preview

```sh
python3 -m http.server 8148
# then visit http://localhost:8148
```

## Deploy

Static files only — host anywhere (GitHub Pages, Netlify, Vercel, or a path
on the main site).
