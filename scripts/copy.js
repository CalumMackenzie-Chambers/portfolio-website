import { watch } from 'chokidar';
import pkg from 'fs-extra';
const { copy, copySync, lstatSync } = pkg;
import path from 'path';

function copyFile(srcPath, destPath) {
  copy(srcPath, destPath, err => {
    if (err) return console.error(err);
    console.log(`Copied: ${srcPath} -> ${destPath}`);
  });
}

function initialCopy() {
  console.log('Starting initial copy...');

  const srcEntries = pkg.readdirSync('src');

  srcEntries.forEach(entry => {
    const srcPath = path.join('src', entry);
    if (lstatSync(srcPath).isFile()) {
      copyFile(srcPath, path.join('dist', entry));
    }
  });

  copySync('src/images', 'dist/static/images');
  console.log('Initial copy completed.');
}

function setupWatcher() {
  watch('src/**/*.html').on('change', path => {
    copyFile(path, path.replace('src/', 'dist/'));
  });

  watch('src/images/**/*').on('change', path => {
    copyFile(path, path.replace('src/images', 'dist/static/images'));
  });
}

initialCopy();

if (process.argv.includes('--watch')) {
  setupWatcher();
}
