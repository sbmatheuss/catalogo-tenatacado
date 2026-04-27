import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src/assets');

const MAX_SIZE = 80;
const MAX_DIMENSION = 600;

async function optimizeImage(filePath) {
  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;
  const ext = path.extname(filePath).toLowerCase();
  const name = path.basename(filePath);
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const tempPath = path.join(dir, `${baseName}_temp${ext}`);
  
  if (sizeKB > MAX_SIZE) {
    try {
      let img = sharp(filePath);
      const metadata = await img.metadata();
      
      let newWidth = metadata.width;
      let newHeight = metadata.height;
      
      if (newWidth > MAX_DIMENSION || newHeight > MAX_DIMENSION) {
        if (newWidth > newHeight) {
          newWidth = MAX_DIMENSION;
          newHeight = Math.round((metadata.height / metadata.width) * MAX_DIMENSION);
        } else {
          newHeight = MAX_DIMENSION;
          newWidth = Math.round((metadata.width / metadata.height) * MAX_DIMENSION);
        }
      }
      
      if (ext === '.png') {
        await img
          .resize(newWidth, newHeight, { fit: 'inside' })
          .png({ quality: 75, compressionLevel: 9 })
          .toFile(tempPath);
      } else {
        await img
          .resize(newWidth, newHeight, { fit: 'inside' })
          .jpeg({ quality: 75 })
          .toFile(tempPath);
      }
      
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newStats = fs.statSync(filePath);
      const newSizeKB = (newStats.size / 1024).toFixed(1);
      
      console.log(`✓ ${name}: ${sizeKB.toFixed(0)}KB → ${newSizeKB}KB (${((1 - newStats.size/stats.size) * 100).toFixed(0)}% menor)`);
    } catch (err) {
      console.log(`Erro em ${name}: ${err.message}`);
    }
  } else {
    console.log(`✓ ${name}: ${sizeKB.toFixed(0)}KB (ok)`);
  }
}

async function main() {
  const files = fs.readdirSync(assetsDir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map(f => path.join(assetsDir, f));
  
  console.log(`Otimizando ${files.length} imagens...\n`);
  
  for (const file of files) {
    await optimizeImage(file);
  }
  
  console.log('\nTudo otimizado!');
}

main();