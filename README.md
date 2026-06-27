# 🚀 Dharshini V T | Full Stack Developer Portfolio

🔴 **[Live Demo: Portfolio](https://dharshini8-portfolio.netlify.app/)** 🔴

Welcome to my personal developer portfolio! This is a modern, high-performance, and fully responsive single-page application built to showcase my skills, projects, experience, and achievements. It features interactive animations, a dynamic dark/light theme, and a real-time functioning contact form.

## 🎨 Tech Stack
- **Frontend Framework:** React 18, Vite
- **Styling:** Tailwind CSS (with dynamic styling using `clsx` and `tailwind-merge`)
- **Animations:** Framer Motion, React Tilt, React Type Animation, and tsParticles (for animated backgrounds)
- **Icons & UI:** Lucide React / React Icons, Swiper (carousels)
- **Forms & Emails:** EmailJS (real-time form submissions without a backend)
- **Routing:** React Router DOM

## 📝 Features
- **✨ Dynamic Animations:** Premium scroll animations and hover effects powered by Framer Motion.
- **🌗 Theme Toggle:** Seamless switching between Light and Dark modes.
- **✉️ Real-time Contact Form:** Fully functional contact form linked directly to EmailJS for instant email notifications.
- **📱 Responsive Design:** Flawlessly adapts to all screen sizes (mobile, tablet, desktop).
- **🚀 High Performance:** Built with Vite for rapid development and optimized production builds.

## 📂 Folder Structure
```text
portfolio/
├── public/                 # Static assets (images, pdfs)
├── src/
│   ├── assets/             # Project-specific local assets
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/             # AnimatedBackground, ThemeToggle, CustomCursor
│   ├── data/
│   │   └── portfolioData.jsx # Centralized data for the entire portfolio
│   ├── App.jsx             # Main Application Component
│   ├── index.css           # Global Tailwind and custom styles
│   └── main.jsx            # React DOM Entry Point
├── index.html              # HTML Entry Point
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
├── netlify.toml            # Netlify deployment configuration
└── package.json
```

## 🛠️ Setup Guide (Local Preview)

If you'd like to clone and run this project locally on your machine, follow these steps:

### Prerequisites
1. **Node.js:** Ensure Node.js is installed (`node -v` should show version >= 18).

### Installation
1. Open a terminal and clone the repository.
2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the Vite development server:
```bash
npm run dev
```
The application will be running at `http://localhost:5173`. Open this link in your browser to preview the site.

## 🌐 Deployment Instructions

This portfolio is fully optimized for continuous deployment using **Netlify**.

1. Build the production assets:
   ```bash
   npm run build
   ```
   *This compiles optimized HTML/CSS/JS into the `dist/` folder.*

2. **Deploying to Netlify:**
   - The repository includes a `netlify.toml` file which automatically configures the build settings (`npm run build`) and publish directory (`dist`).
   - Simply connect your GitHub repository to Netlify.
   - Any pushes to the `main` branch will automatically trigger a new deployment.

## 📞 Support & Contact

For inquiries or to discuss full-stack internship opportunities, you can reach me at:
- **Email:** vtdharshini8@gmail.com
- **LinkedIn:** [Dharshini V T](https://www.linkedin.com/in/dharshini-v-t-54b675293)
- **GitHub:** [@Dharshini-8](https://github.com/Dharshini-8)
