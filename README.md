# Dharshini Portfolio

A modern, **React + Vite** portfolio showcasing my projects, experience, and contact form (EmailJS integrated). The site is now hosted on **Netlify**.

---

## Demo

- **Live site:** https://your-site-name.netlify.app *(replace with actual Netlify URL once deployed)*
- **Local preview:** After running the dev server you can view the app at `http://localhost:5173`.

![Portfolio preview](file:///C:/Users/sanjaykumar/.gemini/antigravity-ide/brain/56c792ec-a93f-420f-a714-3c5c94afb91c/portfolio_preview_1782410567875.webp)

---

## Getting Started (Local Development)

```bash
# Clone the repo
git clone https://github.com/Dharshini-8/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at **http://localhost:5173** with hot‑module replacement.

---

## Build & Deploy

```bash
# Create a production build
npm run build
# The output is placed in the `dist/` folder
```

The project includes a `netlify.toml` file, so deploying to Netlify is as simple as:
1. Connect the GitHub repository to Netlify.
2. Netlify will automatically run `npm run build` and serve the `dist` folder.

---

## Tech Stack

- **React** with functional components & hooks
- **Vite** for fast bundling and HMR
- **Tailwind CSS** for styling (dark mode, glassmorphism, micro‑animations)
- **Framer Motion** for smooth UI animations
- **EmailJS** for contact‑form submissions
- **@tsparticles/react** for particle backgrounds

---

## Environment Variables

The app expects the following variables (set in Netlify or a `.env` file for local dev):

| Variable | Description |
|----------|-------------|
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `REACT_APP_EMAILJS_USER_ID` | EmailJS public user ID |

---

## Screenshots

*Home page, Experience timeline, Projects grid, Contact form*

*(Add more screenshots if desired.)*
