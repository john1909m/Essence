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

// Step 3: Ensure images directory exists in public folder
const publicImagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
  console.log('Created public/images directory');
}

// Step 4: Copy images from /public/images to /dist/images in build
console.log('Running vite build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  
  // After build, ensure images are in the right place
  const distImagesDir = path.join(__dirname, 'dist', 'images');
  if (!fs.existsSync(distImagesDir)) {
    fs.mkdirSync(distImagesDir, { recursive: true });
  }
  
  // Copy all files from public/images to dist/images
  if (fs.existsSync(publicImagesDir)) {
    const imageFiles = fs.readdirSync(publicImagesDir);
    for (const file of imageFiles) {
      const sourcePath = path.join(publicImagesDir, file);
      const destPath = path.join(distImagesDir, file);
      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, destPath);
      }
    }
    console.log('Copied images to dist/images directory');
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 