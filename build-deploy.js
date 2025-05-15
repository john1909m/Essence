// Build script to ensure CSS files are properly bundled
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting enhanced build process...');

// Step 1: Ensure styles directory exists
const stylesDir = path.join(__dirname, 'src', 'styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
  console.log('Created styles directory');
}

// Step 2: Ensure slick.css exists
const slickCssPath = path.join(stylesDir, 'slick.css');
if (!fs.existsSync(slickCssPath)) {
  fs.writeFileSync(
    slickCssPath,
    `/* Import slick carousel styles from node_modules */
@import 'node_modules/slick-carousel/slick/slick.css';
@import 'node_modules/slick-carousel/slick/slick-theme.css';`
  );
  console.log('Created slick.css file');
}

// Step 3: Run the standard build command
console.log('Running vite build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 