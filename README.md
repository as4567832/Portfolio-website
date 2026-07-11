# Premium Portfolio Website

A premium, modern, fully responsive personal portfolio built with React 19, Vite, Tailwind CSS v4, and Framer Motion. It showcases work across Full Stack Development, AI, IoT, and Electrical/Electronics Engineering with glassmorphism UI, smooth animations, and a fully data-driven content model.

## Tech Stack

- **React 19** + **Vite** (rolldown-powered build)
- **Tailwind CSS v4** (CSS-first `@theme` configuration)
- **Framer Motion** — section reveals, page transitions, scroll progress
- **React Router DOM** — routing (home, blog post detail, 404)
- **React Icons** — icon set across skills, services, socials
- **EmailJS** — contact form email delivery
- **Swiper.js** — testimonials carousel
- **React Type Animation** — hero role typing effect
- **React CountUp** — animated statistics
- **React Parallax Tilt** — project card tilt effect
- **React Scroll** — smooth in-page navigation
- **GSAP** — available for any additional custom animation work

## Project Structure

```
src/
│── assets/         # Images and static assets
│── components/     # Reusable UI building blocks (Navbar, Footer, Modal, etc.)
│── data/           # All personal content — edit these files to customize the site
│── hooks/          # Custom hooks (useLockBodyScroll, useMediaQuery)
│── pages/          # Route-level pages (Home, BlogPost, NotFound)
│── sections/       # Page sections (Hero, About, Skills, Projects, ...)
│── utils/          # Shared animation variants and helpers
│── App.jsx         # App shell: routing, navbar/footer, global chrome
│── main.jsx        # React root + BrowserRouter
│── index.css       # Tailwind import + theme tokens + global styles
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables (optional but recommended)

Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials so the Contact form can actually send email:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are left unset, the form will simulate a successful submission in the UI (useful for local development) but will not send a real email.

### 3. Run the dev server

```bash
npm run dev
```

Visit the printed local URL (defaults to `http://localhost:5173`).

### 4. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Customizing Your Content

Everything on the site is driven by plain data files in `src/data/` — you should not need to touch component code to personalize the site:

| File | Controls |
|---|---|
| `profile.js` | Name, roles (typing animation), hero image, about text, career objective, fun facts, stats, contact details, resume URL |
| `skills.js` | Skill categories, items, icons, and percentages |
| `projects.js` | Project cards, filters, tech stack, links, featured flag |
| `education.js` | Education timeline + courses list |
| `experience.js` | Timeline (internships, training, hackathons, workshops, research, experience) |
| `certificates.js` | Certificate grid + modal preview |
| `achievements.js` | Awards, competitions, research, open source contributions |
| `services.js` | Services offered grid |
| `socials.js` | Social links (GitHub, LinkedIn, Instagram, Twitter/X, Email) |
| `blogs.js` | Blog cards + full blog post content (rendered at `/blog/:id`) |
| `gallery.js` | Masonry photo gallery with lightbox |
| `testimonials.js` | Testimonials carousel |

### Replacing the resume

Replace `public/resume.pdf` with your actual resume — the "Download Resume" button in the Hero section links directly to this file.

### Theme

Colors, fonts, and custom animation keyframes are defined in the `@theme` block at the top of `src/index.css` (Tailwind v4's CSS-first configuration). Update the CSS variables there to re-theme the entire site:

```css
@theme {
  --color-primary: #3B82F6;
  --color-secondary: #06B6D4;
  --color-accent: #8B5CF6;
  --color-background: #09090B;
  --color-card: #18181B;
  --color-text: #FFFFFF;
}
```

## Features

- Animated hero with gradient blobs, typing effect, and social links
- Glassmorphism cards throughout (blur, subtle borders, soft shadows)
- Filterable projects, timeline, achievements, blog, and gallery
- Certificate and gallery lightbox modals with keyboard (Esc) support
- Animated statistics with `react-countup`
- Testimonials carousel via Swiper
- Contact form wired to EmailJS with graceful fallback when unconfigured
- Custom animated cursor (desktop only, respects touch devices)
- Scroll progress bar, scroll-to-top button, section reveal animations
- Client-side routing with a dedicated blog post page and custom 404 page
- Route-level code splitting (blog post and 404 pages load on demand)
- SEO-ready `index.html` (meta description, Open Graph, Twitter cards) + `robots.txt`

## Deployment

This is a static Vite build — deploy the contents of `dist/` to any static host.

### Vercel

```bash
npm i -g vercel
vercel
```

Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

Because this app uses client-side routing, add a rewrite so deep links (e.g. `/blog/1`) resolve correctly. Vercel handles this automatically for Vite projects; if needed, add a `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify

Build command: `npm run build`. Publish directory: `dist`. Add a `public/_redirects` file for SPA routing:

```
/*    /index.html   200
```

### GitHub Pages / any static host

Run `npm run build`, then serve the `dist/` folder. Configure your host to fall back to `index.html` for unknown routes (SPA rewrite), otherwise direct links to `/blog/:id` will 404 on refresh.

## Notes

- `public/resume.pdf` ships as a placeholder file — replace it before deploying.
- Update `.env` values, canonical URLs, and OG image (`index.html`) with your real domain before going live.
- Remember to set your real social links in `src/data/socials.js`.
