This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

//Project Architecture
// File structure for your Next.js + Tailwind + TypeScript portfolio project

/portfolio-site
├── public/
│   ├── images/
│   │   └── profile.jpg             // Your personal homepage photo
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              // Navigation bar with dark mode toggle
│   │   ├── Footer.tsx              // Simple footer with social links
│   │   ├── Hero.tsx                // Homepage hero section
│   │   ├── ProjectCard.tsx         // Reusable card for dev projects
│   │   ├── PhotoGrid.tsx           // Gallery grid for photography
│   │   └── ThemeToggle.tsx         // Dark/light mode toggle
│   ├── pages/
│   │   ├── index.tsx               // Homepage
│   │   ├── projects.tsx            // Dev projects page
│   │   ├── photography.tsx         // Photography gallery
│   │   └── contact.tsx             // Contact form page
│   ├── styles/
│   │   └── globals.css             // Tailwind base styles
│   ├── utils/
│   │   └── projects.ts             // Array of project data (can be JSON too)
│   └── app/                        // (optional if using App Router)
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── package.json
└── README.md
