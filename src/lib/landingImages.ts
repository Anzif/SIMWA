import fs from 'fs';
import path from 'path';

const landingDir = path.join(process.cwd(), 'public', 'images', 'landing');
const supportedExtensions = new Set(['.jpeg', '.jpg', '.png', '.webp', '.heic', '.heif']);

const buildPublicPath = (filePath: string) => `/images/landing/${path.relative(landingDir, filePath).replace(/\\/g, '/')}`;

const collectImages = (dir: string) => {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => buildPublicPath(path.join(dir, file)));
};

const formatCategoryTitle = (name: string) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const topLevelImages = collectImages(landingDir);

// Preferred display order for gallery categories. Titles listed here appear
// first, in this order; any others follow alphabetically.
const categoryOrder = ["Ramadan Relief Kit", "Robotics Club", "Medical Camp"];

const orderRank = (title: string) => {
  const index = categoryOrder.indexOf(title);
  return index === -1 ? categoryOrder.length : index;
};

const landingGalleryCategories = fs.existsSync(landingDir)
  ? fs
      .readdirSync(landingDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => ({
        title: formatCategoryTitle(entry.name),
        images: collectImages(path.join(landingDir, entry.name)),
      }))
      .filter((category) => category.images.length > 0)
      .sort((a, b) => orderRank(a.title) - orderRank(b.title) || a.title.localeCompare(b.title))
  : [];

const landingGalleryImages = [...topLevelImages, ...landingGalleryCategories.flatMap((category) => category.images)];

export { landingGalleryCategories, landingGalleryImages };
