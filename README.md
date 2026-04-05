# 無冠 — Uncrowned Kings

> *"In another era, they would have been known as prodigies. They were hidden in the shadow of the best."*

A dark, editorial-style player dossier showcase for the **Uncrowned Kings** from *Kuroko no Basket* — five elite high school players ranked just below the Generation of Miracles.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Preview

Five player cards, each with:
- Per-character accent colour theming via CSS custom properties
- Animated stat bars triggered on scroll
- Staggered quality tag reveals
- Alternating image/info layout (flips on even cards)
- Fully responsive mobile layout

---

## Players Featured

| # | Player | School | Position | Epithet |
|---|--------|--------|----------|---------|
| 7 | Mibuchi Reo | Rakuzan High | SG | 夜叉 · Night Demon |
| 5 | Nebuya Eikichi | Rakuzan High | C | 剛力 · Herculean Strength |
| 6 | Hayama Kotaro | Rakuzan High | SF | 雷獣 · Thunder Beast |
| 7 | Kiyoshi Teppei | Seirin High | C/PF | 鉄心 · The Iron Heart |
| 4 | Hanamiya Makoto | Kirisaki Daiichi High | PG | 悪童 · Bad Boy |

---

## Project Structure

```
uncrowned-kings/
├── Index.html       # Page structure & card markup
├── style.css        # All styling — dark theme, cards, responsive layout
├── main.js          # IntersectionObserver — scroll animations & stat bars
├── Mibuchi.jpg      # Player images (local assets)
├── Nebuya.jpg
├── Kotaro.jpg
├── Kiyoshi.jpg
└── Hanamiya.jpg
```

---

## Getting Started

No build tools, no dependencies. Just clone and open.

```bash
git clone https://github.com/your-username/uncrowned-kings.git
cd uncrowned-kings
```

Then open `Index.html` in your browser — or serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

---

## Design Notes

- **Fonts** — `Black Han Sans` (display), `DM Mono` (labels/tags), `Noto Sans JP` (body)
- **Colour** — Near-black base (`#08080a`) with per-card accent colours set via `--accent` CSS variables
- **Layout** — CSS Grid two-column cards; image panel fades into info panel via gradient overlay
- **Animations** — CSS transitions on stat bars (`width` via `--w` custom property), JS-staggered tag reveals on scroll via `IntersectionObserver`
- **Mobile** — Single-column below 680px; image panel stacks above info panel with a bottom-fade gradient

---

## Customisation

### Adding a new player card

Copy any `.card` block in `Index.html` and update:

```html
<div class="card" style="--accent:#YOUR_COLOR; --accent2:#YOUR_COLOR2;">
  <div class="card-visual">
    <span class="card-badge">POSITION // School Name</span>
    <img src="YourImage.jpg" alt="">
  </div>
  <div class="card-info" data-num="JERSEY_NUMBER">
    <!-- player details here -->
  </div>
</div>
```

The `--accent` variable cascades to the quote border, stat bars, tag highlights, and accent line on hover automatically.

---

## Credits

Characters and lore from *Kuroko no Basket* by Tadatoshi Fujimaki (© Shueisha). This is a fan project made for personal/portfolio use, not affiliated with or endorsed by the original creators.

---

*Built with plain HTML, CSS, and JavaScript — no frameworks.*
