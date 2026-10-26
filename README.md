# John Tan — Data Analyst Portfolio (`CLEVERLY SG PTE LTD`)

Polished glassmorphism profile website and accompanying 3-page resume PDF tailored for the **Data Analyst** role at **[CLEVERLY SG PTE LTD](https://cleverly.sg/)**.

- **Target Vercel Deployment URL**: `https://john-tan-data-analyst.vercel.app`
- **Existing Profile Deployment (Preserved)**: `https://john-tan-profile.vercel.app`
- **Reference Presentation Deployment**: `https://john-tan-presentation.vercel.app`
- **GitHub Profile**: [`https://github.com/JohnTan38`](https://github.com/JohnTan38)

## Key Features
1. **Cleverly SG Corporate Identity & Theme**: Deep Midnight Slate (`#090D16` / `#0F172A`), Cleverly Crimson/Coral Red (`#E11D48` / `#F43F5E`), Analytics Cyan (`#06B6D4`), and Google Partner Gold (`#F59E0B`).
2. **Glassmorphism & Tile "Pop-Up" on Mouse Hover**: Interactive 3D hover elevation on all role-fit, KPI, methodology, experience, and GitHub project tiles, paired with a floating glassmorphism Hover Inspector card (`#tile-hover-popup`).
3. **Intuitive Search Auto-Complete (`#global-search-input`)**: Real-time substring and token search with highlighted matches, keyboard navigation (`↑`, `↓`, `Enter`, `Esc`, `/`), instant tile filtering, and smooth scroll-and-pulse targeting.
4. **Live Cleverly SG Campaign KPI Dashboard & PSG Grant ROI Simulator**: Interactive Chart.js visualizations and budget sliders across Cleverly SG's 7 core digital marketing metrics (Organic Traffic, Conversion Rate, Keyword Rankings, Paid Traffic, CTR, CPL, CPC, plus ROAS).
5. **Embedded & Downloadable 3-Page Resume PDF**: Direct download (`John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf`) and in-page 3-page zoomable viewer.

## Quick Start & Build
```bash
npm run build
npm test
npx playwright test
```

## GitHub & Vercel Deployment (Preserving `john-tan-profile.vercel.app`)
```bash
# 1. Initialize git repository and push to GitHub (github.com/JohnTan38)
git init
git add .
git commit -m "feat: John Tan Data Analyst profile website & resume PDF for Cleverly SG"
git branch -M main
git remote add origin https://github.com/JohnTan38/john-tan-data-analyst.git
git push -u origin main

# 2. Deploy as a new Vercel project aliased to john-tan-data-analyst.vercel.app
# (Leaves existing john-tan-profile.vercel.app completely untouched)
npx vercel --prod --name john-tan-data-analyst
```
