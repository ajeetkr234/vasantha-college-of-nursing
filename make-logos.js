const fs = require('fs');
const path = require('path');

const partnersDir = path.join(__dirname, 'images', 'partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

const logos = {
  'apollo.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(10, 10)">
    <path d="M 18 2 C 12 8 6 18 6 26 C 6 34 14 38 20 38 C 26 38 34 34 34 26 C 34 18 28 8 22 2 Z" fill="#005a9c"/>
    <path d="M 20 6 C 18 10 14 16 14 22 C 14 26 17 28 20 28 C 23 28 26 26 26 22 C 26 16 22 10 20 6 Z" fill="#e65100"/>
    <circle cx="20" cy="18" r="4" fill="#ffffff"/>
  </g>
  <text x="56" y="28" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#005a9c">Apollo</text>
  <text x="57" y="44" font-family="'Inter', sans-serif" font-size="10.5" font-weight="700" fill="#00838f" letter-spacing="3.5">HOSPITALS</text>
</svg>`,

  'manipal.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(8, 8)">
    <circle cx="15" cy="12" r="5.5" fill="#f97316"/>
    <path d="M 8 36 C 8 26 13 22 22 22 C 25 22 28 24 30 26" stroke="#f97316" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <circle cx="28" cy="12" r="5.5" fill="#0284c7"/>
    <path d="M 35 36 C 35 26 30 22 21 22" stroke="#0284c7" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  </g>
  <text x="56" y="27" font-family="'Inter', sans-serif" font-size="19" font-weight="800" fill="#0f2b59">Manipal</text>
  <text x="56" y="45" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#0284c7">Hospitals</text>
</svg>`,

  'narayana.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(8, 10)">
    <path d="M 18 4 L 26 12 L 20 20 L 28 28 L 20 36 L 12 28 L 20 20 L 12 12 Z" fill="#dc2626"/>
    <circle cx="28" cy="12" r="4.5" fill="#16a34a"/>
    <circle cx="28" cy="28" r="4.5" fill="#0284c7"/>
  </g>
  <text x="52" y="27" font-family="'Inter', sans-serif" font-size="18" font-weight="800" fill="#1e3a8a">Narayana</text>
  <text x="53" y="45" font-family="'Inter', sans-serif" font-size="16" font-weight="700" fill="#16a34a">Health</text>
</svg>`,

  'fortis.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(10, 8)">
    <circle cx="16" cy="10" r="5" fill="#dc2626"/>
    <path d="M 16 18 C 10 24 6 32 16 40 C 26 32 22 24 16 18 Z" fill="#16a34a"/>
    <path d="M 24 22 C 30 24 34 30 30 36" stroke="#16a34a" stroke-width="3" stroke-linecap="round" fill="none"/>
  </g>
  <text x="56" y="38" font-family="'Inter', sans-serif" font-size="26" font-weight="800" fill="#15803d">Fortis</text>
</svg>`,

  'aster.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(140, 10)">
    <circle cx="20" cy="20" r="16" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <path d="M 12 20 Q 20 12 28 20 Q 20 28 12 20" fill="#10b981"/>
    <circle cx="20" cy="20" r="3.5" fill="#0284c7"/>
  </g>
  <text x="14" y="30" font-family="'Inter', sans-serif" font-size="24" font-weight="800" fill="#0369a1">Aster</text>
  <text x="15" y="46" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#0284c7" letter-spacing="1">DM Healthcare</text>
</svg>`,

  'max.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(10, 10)">
    <path d="M 20 4 L 25 15 L 36 20 L 25 25 L 20 36 L 15 25 L 4 20 L 15 15 Z" fill="#0284c7"/>
  </g>
  <text x="54" y="30" font-family="'Inter', sans-serif" font-size="22" font-weight="900" fill="#0369a1">MAX</text>
  <text x="54" y="46" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#64748b" letter-spacing="1.5">Healthcare</text>
</svg>`,

  'kims.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(10, 8)">
    <path d="M 10 38 C 15 28 18 18 28 8 C 22 18 28 28 24 38 Z" fill="#dc2626"/>
    <circle cx="28" cy="8" r="4" fill="#dc2626"/>
  </g>
  <text x="50" y="31" font-family="'Inter', sans-serif" font-size="22" font-weight="900" fill="#dc2626">KIMS</text>
  <text x="51" y="47" font-family="'Inter', sans-serif" font-size="10.5" font-weight="700" fill="#475569" letter-spacing="2">HOSPITALS®</text>
</svg>`,

  'hcg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(10, 12)">
    <path d="M 12 18 C 12 10 20 8 20 18 C 20 28 12 26 12 18 Z" fill="#ec4899"/>
    <path d="M 20 10 C 28 10 30 18 20 18 C 10 18 12 10 20 10 Z" fill="#06b6d4"/>
    <path d="M 28 18 C 28 26 20 28 20 18 C 20 8 28 10 28 18 Z" fill="#84cc16"/>
  </g>
  <text x="52" y="30" font-family="'Inter', sans-serif" font-size="22" font-weight="900" fill="#b91c1c">HCG</text>
  <text x="53" y="46" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#0284c7">Hospitals</text>
</svg>`,

  'blk_max.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(6, 12)">
    <rect x="2" y="2" width="28" height="28" rx="4" fill="#0369a1"/>
    <path d="M 16 7 L 16 25 M 7 16 L 25 16" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
  </g>
  <text x="44" y="28" font-family="'Inter', sans-serif" font-size="16" font-weight="900" fill="#0f2b59">BLK-MAX</text>
  <text x="44" y="44" font-family="'Inter', sans-serif" font-size="8.5" font-weight="700" fill="#64748b">Super Speciality Hospital</text>
</svg>`,

  'medanta.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
  <g transform="translate(8, 10)">
    <g stroke="#dc2626" stroke-width="4" stroke-linecap="round">
      <line x1="8" y1="20" x2="32" y2="20"/>
      <line x1="20" y1="8" x2="20" y2="32"/>
      <line x1="12" y1="12" x2="28" y2="28"/>
      <line x1="28" y1="12" x2="12" y2="28"/>
    </g>
  </g>
  <text x="48" y="34" font-family="'Inter', sans-serif" font-size="22" font-weight="700" fill="#dc2626" letter-spacing="-0.5">medanta</text>
</svg>`
};

for (const [filename, content] of Object.entries(logos)) {
  fs.writeFileSync(path.join(partnersDir, filename), content.trim(), 'utf8');
}

console.log('Successfully generated all hospital logos!');
