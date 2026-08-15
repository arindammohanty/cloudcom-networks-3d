const fs = require('fs');
const path = require('path');

const files = [
  'app/company/page.tsx',
  'app/solutions/page.tsx',
  'app/industries/page.tsx',
  'app/resources/page.tsx',
  'app/partners/page.tsx',
  'app/careers/page.tsx',
  'app/support/page.tsx',
  'app/contact/page.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add relative z-10 if not present
    content = content.replace(/<section\s+([^>]*?)className="([^"]*?)"/g, (match, before, classes) => {
        if (!classes.includes('z-10') && !classes.includes('z-20')) {
            return `<section ${before}className="relative z-10 ${classes}"`;
        }
        return match;
    });
    
    content = content.replace(/<section\s+className="([^"]*?)"/g, (match, classes) => {
        if (!classes.includes('z-10') && !classes.includes('z-20')) {
            return `<section className="relative z-10 ${classes}"`;
        }
        return match;
    });

    // Revert -z-10 just in case
    content = content.replace(/fixed inset-0 -z-10/g, 'fixed inset-0 z-0');

    fs.writeFileSync(file, content);
});
console.log("Fixed z-indices.");
