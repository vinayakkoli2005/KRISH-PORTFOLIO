# Krish Gupta - 3D Interactive Portfolio

This is a modern, performance-optimized, and visually stunning 3D interactive portfolio built for Krish Gupta. Focusing on corporate finance, operations, and strategic execution, this portfolio utilizes a cinematic "dark mode" aesthetic paired with an embedded 3D WebGL scene to stand out.

![Portfolio Preview](./public/preview.png) *(Note: Replace with actual screenshot when deploying or if desired in repository)*

## 🚀 Features

*   **Interactive 3D Hero Section**: Embedded Spline model (`@splinetool/react-spline`) acting as a visually engaging and interactive background.
*   **Cinematic "Dark Mode" Aesthetic**: Sleek Charcoal (`#0B0C10`) and Dark-Blue (`#1F2833`) backgrounds with striking cyan/teal accents.
*   **Scroll Animations**: Smooth entrance animations powered by `framer-motion` to keep visitors engaged as they scroll down. 
*   **Glassmorphism UI Elements**: Experience timeline and skill cards utilize subtle frosted-glass effects to look premium and modern.
*   **Responsive Timeline**: A mobile-friendly visual timeline depicting key experiences (Finance & Investment Cell, Enactus BRAC, Chetna Vismay, etc.).
*   **Direct Resume Download**: Visitors can download the `Krish_Resume.pdf` PDF file directly from the hero section.
*   **Aggressive Watermark Mitigation**: Includes custom visual overrides to hide Spline watermarks on free-tier viewer embeddings, keeping the portfolio looking completely professional.

## 🛠 Tech Stack

*   **Core Framework**: [React](https://reactjs.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/) (For blazing fast hot-reload development)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS (Glassmorphism & Scrollbars)
*   **3D Rendering Engine**: [Spline](https://spline.design) & `@splinetool/react-spline`
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
krish-3d-portfolio/
├── public/                # Static assets (Not processed by Webpack/Vite)
│   └── Krish_Resume.pdf   # The source resume for download
├── src/
│   ├── App.jsx            # Main React component containing Hero, Timeline and Footer
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles, Glassmorphism classes, and Watermark CSS Overrides
├── index.html             # The base HTML file 
├── tailwind.config.js     # Tailwind design system configuration (colors, fonts)
├── package.json           # Dependencies and project metadata
└── README.md              # You are here!
```

## 💻 Running Locally

1. **Prerequisites**
   Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
   
2. **Install Dependencies**
   Open your terminal in the root directory (where this `README.md` is) and run:
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   *The portfolio should now be running at `http://localhost:5173/`.*

## 🌐 Deployment

This project is perfectly suited to be deployed on platforms like **Vercel** or **Netlify**.

**To deploy to Vercel (Recommended):**
1. Push this code to a GitHub Repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import the GitHub repository.
4. Leave the default Vite build settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

## 📝 Modification Guide

*   **Updating Resume Content**: To change text in the Experience or Skills sections, modify the `experiences` array or `<SkillCategory>` elements directly within `src/App.jsx`.
*   **Updating PDF**: To update the downloadable resume, just swap out the `Krish_Resume.pdf` file located inside the `/public` folder with the new copy.
*   **Updating 3D Model**: If you make changes in your Spline editor, the website will automatically pull the newest published version of your scene since it uses your exported `.splinecode` URL!

---
*Created by Antigravity based on the 3D-Web-Experience architecture patterns.*
