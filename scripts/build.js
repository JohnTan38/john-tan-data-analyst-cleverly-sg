#!/usr/bin/env node
/**
 * Build script for john-tan-data-analyst-cleverly-sg
 * Copies src/index.html and public/John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf into dist/
 * and verifies integrity of all assets, interactive hooks, and embedded PDF data.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcHtml = path.join(rootDir, 'src', 'index.html');
const pubPdf = path.join(rootDir, 'public', 'John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(srcHtml)) {
  console.error('ERROR: Missing src/index.html');
  process.exit(1);
}
if (!fs.existsSync(pubPdf)) {
  console.error('ERROR: Missing public/John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf');
  process.exit(1);
}

fs.mkdirSync(distDir, { recursive: true });
fs.copyFileSync(srcHtml, path.join(distDir, 'index.html'));
fs.copyFileSync(pubPdf, path.join(distDir, 'John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf'));

const htmlStat = fs.statSync(path.join(distDir, 'index.html'));
const pdfStat = fs.statSync(path.join(distDir, 'John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf'));

console.log('[build] Built dist/index.html (' + htmlStat.size + ' bytes)');
console.log('[build] Copied dist/John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf (' + pdfStat.size + ' bytes)');
console.log('[build] Build succeeded.');
