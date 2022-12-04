import { readdir, mkdir, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIRNAME = join(__dirname, 'files');
const DEST_DIRNAME = join(__dirname, 'files_copy');

const copy = async () => {
  try {
    const files = await readdir(SRC_DIRNAME);
    await mkdir(DEST_DIRNAME);

    for (const file of files) {
      const fileSrc = join(SRC_DIRNAME, file);
      const fileDest = join(DEST_DIRNAME, file);
      await copyFile(fileSrc, fileDest);
    }

    console.log('Files were copied !')
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        throw new Error('FS operation failed. No directory to copy')
      case 'EEXIST':
        throw new Error('FS operation failed. Directory already exists')
      default:
        throw err;
    }
  }
};

await copy();
