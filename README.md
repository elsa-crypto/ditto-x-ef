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
Fraunces serif headlines, Inter body) with Entrepreneur First's bold
black + red identity layered in as the accent color and the co-brand lockup
on the landing page.

**Note:** the "EF" mark on the landing page is a placeholder badge (black
square, white "EF", red underline) — swap in the real Entrepreneur First
logo asset once you have one, in `index.html` (`.logo-ef`).

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
