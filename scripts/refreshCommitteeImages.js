const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const heicConvert = require('heic-convert');

const sourceDir = path.resolve('C:/Users/ANZIF/OneDrive/Desktop/Simwa members');
const targetDir = path.resolve('C:/Users/ANZIF/OneDrive/Desktop/Simwa/simwa-site/public/images/committee');

const normalizeName = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const removeAllFiles = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isFile()) fs.unlinkSync(fullPath);
  }
};

const convertFile = async (sourcePath, targetPath) => {
  const ext = path.extname(sourcePath).toLowerCase();
  if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
    return;
  }

  if (ext === '.webp') {
    await sharp(sourcePath).jpeg({ quality: 92 }).toFile(targetPath);
    console.log(`Converted ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
    return;
  }

  if (ext === '.heic' || ext === '.heif') {
    const inputBuffer = fs.readFileSync(sourcePath);
    const outputBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 0.92 });
    fs.writeFileSync(targetPath, outputBuffer);
    console.log(`Converted ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
    return;
  }

  console.warn(`Skipped unsupported file type: ${sourcePath}`);
};

(async () => {
  ensureDir(targetDir);
  console.log('Cleaning target directory:', targetDir);
  removeAllFiles(targetDir);

  const files = fs.readdirSync(sourceDir).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpeg', '.jpg', '.png', '.webp', '.heic', '.heif'].includes(ext);
  });

  if (!files.length) {
    console.error('No supported image files found in source folder.');
    process.exit(1);
  }

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const originalExt = path.extname(file);
    const normalizedBase = normalizeName(path.basename(file, originalExt));
    const targetName = ['.jpeg', '.jpg'].includes(ext) ? `${normalizedBase}${ext}` : `${normalizedBase}.jpeg`;
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, targetName);

    try {
      await convertFile(sourcePath, targetPath);
    } catch (error) {
      console.error(`Failed to process ${file}:`, error.message || error);
    }
  }

  console.log('Refresh complete. Output files:');
  console.log(fs.readdirSync(targetDir).sort().join('\n'));
})();
