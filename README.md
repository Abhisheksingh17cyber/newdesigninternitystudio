# Avéa Wellness Studio

A premium, responsive React web application built for the Avéa Wellness Studio. This project includes fully responsive multi-page routing, sophisticated layout styling, and animated components to deliver a calming and high-end digital experience.

## Features
- **Responsive Navigation**: Adaptive header layout with custom animations (GSAP).
- **Mobile-first Layouts**: Fluid typography and grid systems perfectly scaled to all screen sizes.
- **Routing**: Client-side single-page routing with `react-router-dom`.
- **Cart & Booking**: Frontend mockups for booking and shop discovery (includes state management via `CartContext`).

## Tech Stack
- Frontend: React (Vite) + TypeScript
- Styling: Tailwind CSS
- Animation: GSAP, Motion (Framer Motion)
- Icons: Lucide React

## Local Development

**Prerequisites:** Node.js (v18+)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment
This project is fully configured for deployment on **Vercel**. 
The root `vercel.json` provides the correct routing rewrite rules so inner-page navigation deep-links function without returning 404 errors.
