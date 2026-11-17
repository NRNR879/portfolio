# Rahul Nandan Reddy - Personal Portfolio Website

A modern, responsive, ATS-friendly personal portfolio website built for **Rahul Nandan Reddy**, first-year B.Tech Computer Science student at GRIET seeking technical internships.

**Target Role:** Software Developer  
**Long-Term Goal:** Agentic AI Developer & Forward Deployed Engineer  
**Tech Stack:** React 18, Vite, Tailwind CSS, Framer Motion, Matter.js, Lucide Icons

---

## 🚀 Quick Start

### 1. Prerequisites
Make sure you have [Node.js (v18+)](https://nodejs.org/) installed.

### 2. Installation
```bash
# Navigate to the project directory
cd rahul-portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static files will be generated in the `dist/` directory.

---

## 🛠️ How to Customize Personal Information

All personal content, statistics, links, and credentials are intentionally centralized in a single file so you never have to modify React components:

📍 **`src/data/siteData.js`**

Open `src/data/siteData.js` in your editor to modify any text, links, or metrics.

### Dev-Mode Visual Inspector
When running `npm run dev`, any unknown or unfilled placeholder formatted as `[ADD: ...]` is automatically highlighted with a pulsing amber badge on the page. In addition, a **"Dev Placeholders"** floating toggle in the lower right corner provides quick status notes. In production builds (`npm run build`), these badges disappear and render clean text.

---

## 📋 Comprehensive Checklist of All `[ADD: ...]` Placeholders

Here is every single item currently marked with `[ADD: ...]` in `src/data/siteData.js` that you should customize with your real data:

| Section | Key / Location | Placeholder String | Description & Guidance |
| :--- | :--- | :--- | :--- |
| **Personal Info** | `personal.email` | `[ADD: your.email@domain.com]` | Your professional email address for recruiter contact. |
| **Social Links** | `personal.socialLinks.github` | `[ADD: your actual GitHub profile]` | Set to your official GitHub profile URL. |
| **Social Links** | `personal.socialLinks.linkedin` | `[ADD: your actual LinkedIn handle]` | Set to your official LinkedIn profile URL. |
| **Hero Stats** | `heroStats[0].value` | `[ADD: N]` | Exact count of LeetCode problems solved (e.g. `50+`). |
| **Hero Stats** | `heroStats[1].value` | `[ADD: N]` | Exact count of HackerRank badges earned (e.g. `4★`). |
| **Projects (Dino)** | `projects[0].extensionDetail` | `[ADD: deployment or player count]` | Optional player metric or deployment note (e.g., "Deployed on Vercel with 100+ plays"). |
| **Projects (Dino)** | `projects[0].liveUrl` | `[ADD: URL]` | Live deployment URL (e.g. Vercel, Netlify, or GitHub Pages). |
| **Projects (Physics)** | `projects[1].extensionDetail` | `[ADD: extension or tuning detail]` | Extension detail (e.g., "Tuned restitution coefficient and added multi-touch support"). |
| **Projects (Physics)** | `projects[1].liveUrl` | `[ADD: URL]` | Live deployment URL for the physics sandbox. |
| **Problem Solving** | `problemSolving.platforms[0].solved` | `[ADD: N] solved` | LeetCode total solved count (e.g., `52 solved`). |
| **Problem Solving** | `problemSolving.platforms[0].split` | `[ADD: Easy/Medium/Hard split]` | LeetCode breakdown (e.g., `35 Easy · 17 Medium · 0 Hard`). |
| **Problem Solving** | `problemSolving.platforms[0].streak` | `[ADD: streak]` | LeetCode streak (e.g., `25-day streak`). |
| **Problem Solving** | `problemSolving.platforms[1].badges` | `[ADD: N]-star badges` | HackerRank badge count (e.g., `4-star Problem Solving`). |
| **Problem Solving** | `problemSolving.platforms[1].certificates`| `[ADD: certificates]` | HackerRank certificate status (e.g., `Problem Solving (Basic)`). |
| **Leadership** | `experience.leadership[0].bullets[0]` | `[ADD: 2 bullets of concrete actions]` | Bullet 1: e.g., "Organized introductory robotics hardware workshops for 40+ first-year students". |
| **Leadership** | `experience.leadership[0].bullets[1]` | `[ADD: 2 bullets of concrete actions]` | Bullet 2: e.g., "Coordinated club technical demo showcases and mentored peers on microcontroller fundamentals". |
| **Workshops** | `experience.workshops[0].title` | `[ADD or omit]` | Technical workshops attended at GRIET or online (or omit if none). |
| **Achievements** | `experience.achievements[0].title` | `[ADD: e.g. LeetCode milestones...]` | Academic honors, hackathon participation, or coding milestones. |
| **Roadmap** | `experience.roadmap[3].title` | `[ADD: e.g. Python and DSA depth]` | Current technical focus in progress. |
| **Education** | `education.milestones[0]` | `[ADD: e.g. first-semester results...]` | First semester GPA, club appointments, or academic accolades. |
| **Education** | `education.earlierSchooling` | `[ADD: optional]` | High school / Junior college details (e.g., Class 12 MPC percentage). |
| **Contact Form** | `contact.formspreeEndpoint` | `https://formspree.io/f/xyzkloqp` | Create a free form at [Formspree.io](https://formspree.io/) and paste your form ID to receive emails. |

---

## 📄 Replacing Your Resume
Place your actual PDF resume in:
```
public/resume.pdf
```
Both the "Download Resume" hero button and navbar resume button are linked directly to `/resume.pdf` with the `download` attribute.

---

## 🌐 Deploying to Vercel or GitHub Pages

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite and sets:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

### Deploying to GitHub Pages
1. In `vite.config.js`, add the repository base URL if needed:
   ```javascript
   export default defineConfig({
     base: '/<repository-name>/',
     plugins: [react()],
   });
   ```
2. Run `npm run build`.
3. Push the `dist` folder to your `gh-pages` branch or configure GitHub Actions to build automatically.

---

## 🎮 Easter Egg & 404 Page
Visiting an invalid route or `/404` opens an interactive, playable mini Dino endless runner game directly in the browser!
