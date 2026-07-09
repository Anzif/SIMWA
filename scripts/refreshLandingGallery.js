const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const heicConvert = require('heic-convert');

const sourceDir = path.resolve('C:/Users/ANZIF/OneDrive/Desktop/Simwa Images');
const targetDir = path.resolve('C:/Users/ANZIF/OneDrive/Desktop/Simwa/simwa-site/public/images/landing');
const supportedExtensions = new Set(['.jpeg', '.jpg', '.png', '.webp', '.heic', '.heif']);

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

const cleanDir = (dir) => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
};

const getImageFiles = (dir) => {
  const collected = [];
  if (!fs.existsSync(dir)) return collected;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collected.push(...getImageFiles(fullPath));
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      collected.push(fullPath);
    }
  }

  return collected;
};

const convertFile = async (sourcePath, targetPath) => {
  const ext = path.extname(sourcePath).toLowerCase();
  ensureDir(path.dirname(targetPath));

  if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${path.relative(sourceDir, sourcePath)} -> ${path.relative(targetDir, targetPath)}`);
    return;
  }

  if (ext === '.webp') {
    await sharp(sourcePath).jpeg({ quality: 92 }).toFile(targetPath);
    console.log(`Converted ${path.relative(sourceDir, sourcePath)} -> ${path.relative(targetDir, targetPath)}`);
    return;
  }

  if (ext === '.heic' || ext === '.heif') {
    const inputBuffer = fs.readFileSync(sourcePath);
    const outputBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 0.92 });
    fs.writeFileSync(targetPath, outputBuffer);
    console.log(`Converted ${path.relative(sourceDir, sourcePath)} -> ${path.relative(targetDir, targetPath)}`);
    return;
  }

  console.warn(`Skipped unsupported file type: ${sourcePath}`);
};

(async () => {
  console.log('Refreshing landing gallery from:', sourceDir);
  cleanDir(targetDir);
  ensureDir(targetDir);

  const files = getImageFiles(sourceDir);
  if (!files.length) {
    console.error('No supported image files found in source folder.');
    process.exit(1);
  }

  for (const sourcePath of files) {
    const relativeSource = path.relative(sourceDir, sourcePath);
    const normalizedBase = normalizeName(path.basename(relativeSource, path.extname(relativeSource)));
    const ext = path.extname(sourcePath).toLowerCase();
    const targetExt = ['.jpeg', '.jpg', '.png'].includes(ext) ? ext : '.jpeg';
    const targetFolder = path.dirname(relativeSource);
    const targetName = `${normalizedBase}${targetExt}`;
    const targetPath = path.join(targetDir, targetFolder, targetName);

    try {
      await convertFile(sourcePath, targetPath);
    } catch (error) {
      console.error(`Failed to process ${relativeSource}:`, error.message || error);
    }
  }

  const outputFiles = getImageFiles(targetDir)
    .map((file) => path.relative(targetDir, file))
    .sort();

  console.log('Refresh complete. Output files:');
  console.log(outputFiles.join('\n'));
})();