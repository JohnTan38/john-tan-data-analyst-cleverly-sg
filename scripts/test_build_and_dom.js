#!/usr/bin/env node
/**
 * Automated build & structural assertion suite for CI / npm test.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const distHtmlPath = path.resolve(__dirname, '..', 'dist', 'index.html');
const distPdfPath = path.resolve(__dirname, '..', 'dist', 'John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf');

assert(fs.existsSync(distHtmlPath), 'dist/index.html must exist after npm run build');
assert(fs.existsSync(distPdfPath), 'dist/John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf must exist after npm run build');

const html = fs.readFileSync(distHtmlPath, 'utf8');
assert(html.includes('CLEVERLY SG PTE LTD'), 'Must reference CLEVERLY SG PTE LTD');
assert(html.includes('id="global-search-input"'), 'Must include intuitive search auto-complete input');
assert(html.includes('id="search-autocomplete-list"'), 'Must include search auto-complete dropdown');
assert(html.includes('id="tile-hover-popup"'), 'Must include tile pop-up on mouse hover inspector');
assert(html.includes('download="John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf"'), 'Must include downloadable resume PDF link');
assert(html.includes('john-tan-data-analyst.vercel.app'), 'Must reference target Vercel deployment URL');
assert(html.includes('john-tan-profile.vercel.app'), 'Must preserve link to existing john-tan-profile.vercel.app');
assert(html.includes('github.com/JohnTan38'), 'Must reference github.com/JohnTan38');

console.log('[test] All structural and content assertions passed!');
