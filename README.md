# Uncrowned Kings — Kuroko no Basket

>*"In another era, they would have been known as prodigies. They were hidden in the shadow of the best."*

A dark, editorial-style player dossier showcase for the **Uncrowned Kings** from *Kuroko no Basket*, five elite high school players ranked just below the Generation of Miracles.

---

## 🚀 Live Concept

A character dossier interface inspired by *Kuroko no Basket*, presenting players as interactive cards with:
- Animated stat bars
- Staggered tag reveals
- Dynamic color theming per card
- Scroll-triggered transitions

---

## 🛠 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — layout, animation, responsive design
- **Vanilla JavaScript** — DOM control, animation triggers, dynamic styling

---

## ✨ Key Features

### 1. Scroll-Triggered Animation System
- Uses `IntersectionObserver` instead of scroll events
- Efficient, non-blocking animation triggering
- Cards animate only when entering viewport

### 2. Staggered UI Transitions
```js
setTimeout(() => tag.classList.add('visible'), 80 + i * 100);
```
- Creates controlled sequencing
- Improves perceived smoothness and polish

### 3. Dynamic Color Theming
- Each card has a unique accent color
- Applied programmatically to:
  - Stat bars
  - Text highlights
  - Hover states

### 4. Data-Driven Visual States
- CSS variables (`--w`) control stat bar widths
- JS toggles classes to trigger animations

### 5. Responsive Layout System
- Grid-based card layout
- Alternating structure for visual rhythm
- Mobile-first adjustments via media queries

---

## 🧠 Engineering Decisions

### Why IntersectionObserver?
- Avoids expensive scroll listeners
- Better performance at scale
- Native browser optimization

### Why not a framework?
- Demonstrates understanding of fundamentals
- Full control over rendering and state
- No abstraction hiding core logic

### Why static HTML instead of rendering via JS?
- Faster initial paint
- Simpler SEO structure
- Easier to maintain for small datasets

---

## 📂 Project Structure

```
.
├── Index.html   # UI structure and content
├── style.css    # Layout, animations, responsiveness
├── main.js      # Logic, animation triggers, dynamic styling
└── assets/      # Images
```

---

## ⚙️ How to Run

```bash
# Clone the repo
git clone <your-repo-link>

# Open in browser
open Index.html
```

No dependencies or build tools required.

---

## 👤 Author

**Ayomide Jimoh**  
Frontend Developer (HTML, CSS, JavaScript)

---

## 📌 Note

Characters and lore from *Kuroko no Basket* by Tadatoshi Fujimaki (© Shueisha). This is a fan project made for personal use and is not affiliated with or endorsed by the original creators.

